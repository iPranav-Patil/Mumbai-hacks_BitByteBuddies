from ctypes.wintypes import LANGID
import langid
from transformers import pipeline
from bs4 import BeautifulSoup
from flask import Flask, request, jsonify
import os
import openai
import requests
from flask_cors import CORS
import yfinance
from nltk.tokenize import sent_tokenize


 
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])



api_key = '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'
openai.api_key = api_key

def is_gibberish(text):
    lang, _ = langid.classify(text)
    return lang != 'en'  # Check if language is English

def extract_text_from_url(url, max_characters=4097):
    try:
        # Fetch the webpage content
        response = requests.get(url)
        response.raise_for_status()

        # Parse HTML using BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')

        # Extract text content from paragraphs
        paragraphs = soup.find_all('p')

        # Concatenate paragraphs into a single text
        text = ' '.join([p.get_text() for p in paragraphs])

        # Truncate the text to meet the character limit
        truncated_text = text[:max_characters]

        # Tokenize text into sentences
        sentences = sent_tokenize(truncated_text)

        # Filter out gibberish sentences
        filtered_sentences = [sentence for sentence in sentences if not is_gibberish(sentence)]

        # Join filtered sentences into final content
        final_content = ' '.join(filtered_sentences)

        return final_content

    except requests.exceptions.RequestException as e:
        print(f"Error fetching content from {url}: {e}")
        return None

@app.route('/api/summarize', methods=['POST'])
def summarize():
    try:
        # Hardcode a sample URL for testing
        hardcoded_url = 'https://www.moneycontrol.com/india/stockpricequote/computers-software/infosys/IT'

        # Extract text content from the hardcoded URL (replace this with your actual extraction logic)
        scraped_text = extract_text_from_url(hardcoded_url, max_characters=4097)

        if scraped_text:
            # Use the OpenAI GPT-3 completions API for summarization with adjusted parameters
            response = openai.Completion.create(
                engine="text-davinci-003",
                prompt=scraped_text,
                max_tokens=100,  # Adjust max_tokens to control the length of the summary
                temperature=0.3,  # Lower temperature for more focused output
            )

            # Extract and return the hardcoded summary for testing
            generated_summary = response['choices'][0]['text']
            return jsonify({'summary': generated_summary})
        else:
            return jsonify({'error': 'Failed to extract content from the URL'})

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
def analyze_sentiment(article_text):
    # Load the sentiment analysis pipeline
    sentiment_pipeline = pipeline("sentiment-analysis")

    # Analyze sentiment for the provided article text
    result = sentiment_pipeline(article_text)
    print(result)

    # Extract sentiment label and score
    sentiment_label = result[0]['label']
    sentiment_score = result[0]['score']

    return sentiment_label, sentiment_score
from flask import abort

@app.route('/analyze_sentiment', methods=['POST'])
def analyze_sentiment_api():
    try:
        # Print received headers for debugging
        print(f"Received Headers: {request.headers}")

        # Check if the request has the correct content type
        if 'Content-Type' not in request.headers or request.headers['Content-Type'] != 'application/json':
            raise ValueError('Unsupported Media Type: Request must have Content-Type: application/json')

        # Get the JSON data from the request
        data = request.get_json()

        # Check if 'article_text' is present in the JSON data
        if 'article_text' not in data:
            raise ValueError('Invalid JSON payload: Missing "article_text" field')

        # Extract the article text from the JSON data
        article_text = data['article_text']

        # Analyze sentiment
        sentiment_label, sentiment_score = analyze_sentiment(article_text)

        # Display sentiment information in the terminal (for debugging)
        print(f"Sentiment Label: {sentiment_label}")
        print(f"Sentiment Score: {sentiment_score}")

        # Return the sentiment information as JSON
        return jsonify({
            'sentiment_label': sentiment_label,
            'sentiment_score': sentiment_score
        })

    except ValueError as ve:
        # Handle specific errors with a custom message
        return jsonify({'error': str(ve)}), 400  # Bad Request

    except Exception as e:
        # Log any other exceptions for debugging
        print(f"Error in /analyze_sentiment: {e}")
        return jsonify({'error': str(e)}), 500


@app.route('/analyze_news', methods=['POST'])
def analyze_news():
    try:
        data = request.get_json()
        url = data.get('url', '')
        print(f"Received request for URL: {url}")

        # Extract text from the URL
        scraped_text = extract_text_from_url(url, max_characters=4097)

        if scraped_text:
            # Generate summary using OpenAI GPT-3
            generated_summary = summarize(scraped_text)

            if generated_summary:
                return jsonify({'success': True, 'scraped_text': scraped_text, 'summary': generated_summary})

        return jsonify({'success': False, 'error': 'Failed to analyze news'})

    except Exception as e:
        print(f"Error in /analyze_news: {e}")
        return jsonify({'success': False, 'error': str(e)})


@app.route('/get_stock_details', methods=['POST'])
def get_stock_details():
    try:
        data = request.get_json()
        stock_symbol = data.get('stock_symbol', '')
 
        stock = yfinance.Ticker(stock_symbol)
        info = stock.info

        response_data = {
            'success': True,
            'data': info
        }

    except Exception as e:
        response_data = {
            'success': False,
            'error': str(e)
        }

    return jsonify(response_data)

@app.route('/search', methods=['POST'])
def search():
    try:
        search_query = request.json.get('search_query', '')
        API_KEY = os.getenv('API_KEY')
        SEARCH_ID = os.getenv('SEARCH_ENG_ID')

        if not API_KEY or not SEARCH_ID:
            return jsonify({'success': False, 'error': 'API key or search engine ID not found'})

        url = 'https://www.googleapis.com/customsearch/v1'
        params = {
            'q': search_query,
            'key': API_KEY,
            'cx': SEARCH_ID,
        }

        response = requests.get(url, params=params)
        results = response.json()

        if 'items' in results:
            # Extract links from the search results
            links = [item['link'] for item in results['items']]

            return jsonify({'success': True, 'links': links})

        return jsonify({'success': False, 'error': 'No items found in the search results'})

    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
