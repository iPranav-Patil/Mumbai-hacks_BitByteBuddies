import React from 'react';
import './Home.css';
import bg from '../assets/vector-final.jpeg';
import Navbar from './nav';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
  const featuresData = [
    { id: 1, name: 'News Summary' },
    { id: 2, name: 'Stock Details' },
    { id: 3, name: 'Chatbot' },
    { id: 4, name: 'Sentiment Analysis' },
    // Add more features as needed
  ];

  return (
    <>
    <Navbar/>
      <div className="hero">
        <div className="hero-info">
          <h2>New to the world of Stocks and Trading?</h2>
          <h4>WELCOME TO STOCKSAMACHAR</h4>
          <p>Your personalized tool to get simplified and reliable trading information.</p>
          <p>Summarize articles in one click!</p>
          <p>Get sentiment analysis of a company and understand the company before investing!</p>
          <button className='learn-btn' onClick={()=>{navigate('/reg')}}>Get Started</button>
        </div>
        <div className="hero-img">
          <img src={bg} alt="" />
        </div>
      </div>

      <div className='features-heading'>
        <h2>StockVichar's Features</h2>
      </div>

      <div className="features-container">
        {featuresData.map(feature => (
          <div key={feature.id} className="feature-circle">
            <div className="feature-icon">
              {feature.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}