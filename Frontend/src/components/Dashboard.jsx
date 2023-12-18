// Dashboard.js
import React, { useState } from "react";
import StockCharts from "./StockChart";
import NewsImg from "../assets/news-img.jpeg";
import Summary from "./Summary";
import Infosys from "../assets/infosys.jpg";
import Navbar from "./nav";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  const [details, setDetails] = useState(null);
  const [showGraph, setShowGraph] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const data_card = [
    {
      Id: 1,
      Info: "Infosys hands out salary revision letters to employees, average pay hike below 10%....",
      Image: Infosys,
    },
    {
      Id: 2,
      Info: "Infosys opens new development centre in Nagpur; to accommodate 3,000 employees",
      Image: Infosys,
    },
    {
      Id: 3,
      Info: "Infosys to announce Q3 results on January 11; stock rises",
      Image: Infosys,
    },
  ];

  const handleShowGraph = () => {
    setShowGraph(true);
  };

  const handleShowOtherDiv = () => {
    setShowGraph(false);
  };

  const getStockDetails = async () => {
    try {
      const response = await fetch("http://localhost:5000/get_stock_details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stock_symbol: stockSymbol }),
      });

      const data = await response.json();

      if (data.success) {
        setDetails(data.data);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error fetching stock details:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch("http://localhost:5000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search_query: stockSymbol }),
      });

      const data = await response.json();

      if (data.success) {
        setSearchResults(data.links);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  // Inside handleAnalyzeNews function in Dashboard.jsx

  const handleAnalyzeNews = async (image, content, symbol, link) => {
    setSelectedNews({ image, content, symbol, link });
    // try {
    //   const response = await fetch("http://localhost:5000/api/summarize", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ url: link }), // Sending the link to the backend
    //   });

    //   const data = await response.json();

    //   if (data.summary) {
    //     setSelectedNews({ image, content, symbol, link, summary: data.summary });
    //   } else {
    //     console.error(data.error || 'Failed to get summary');
    //   }
    // } catch (error) {
    //   console.error("Error analyzing news:", error);
    // }
  };

  const handleCloseNewsDetails = () => {
    setSelectedNews(null);
  };

  return (
    <>
      <Navbar />
      {selectedNews ? (
        <Summary
          image={selectedNews.image}
          content={selectedNews.content}
          symbol={selectedNews.symbol}
          link={selectedNews.link}
          onClose={handleCloseNewsDetails}
        />
      ) : (
        <div className="w-screen h-screen flex-col justify-center items-center text-center ">
          <div className="mt-2 flex flex-col items-center justify-center gap-10 w-full">
            <div>
              {" "}
              <label className="flex items-center font-semibold">
                Stock Symbol:
                <input
                  type="text"
                  className="border-2 px-2 w-64 border-green-700 rounded-lg ml-2"
                  value={stockSymbol}
                  onChange={(e) => setStockSymbol(e.target.value)}
                />
              </label>
            </div>
            <div className="flex gap-10">
              <button
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-4 border border-green-700 rounded-md"
                onClick={getStockDetails}
              >
                Get Details
              </button>
              <button
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-6 border border-green-700 rounded-md"
                onClick={handleSearch}
              >
                Get data
              </button>
              <button
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-4 border border-green-700 rounded-md"
                onClick={handleShowGraph}
              >
                Show Graph
              </button>
              <button
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-4 border border-green-700 rounded-md"
                onClick={handleShowOtherDiv}
              >
                Show Links
              </button>
            </div>
          </div>

          <div className=" overflow-y-auto flex mt-4 justify-center">
            {showGraph ? (
              <div className="flex justify-center items-center">
                <StockCharts details={details} />
              </div>
            ) : !details ? (
              <div className="text-center">No Url Data...</div>
            ) : (
              <div className="notif-container">
                <div className="notif-card">
                  <div className="notif-img">
                    <img src={NewsImg}></img>
                  </div>
                  <div className="notif-title">
                    <p>
                      Reliance Power shares skyrocket after a huge downfall,
                      suprising traders!
                    </p>
                  </div>
                </div>
                <button className="analyze-btn"  onClick={()=>{navigate('/sum')}}>Analyze News</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
