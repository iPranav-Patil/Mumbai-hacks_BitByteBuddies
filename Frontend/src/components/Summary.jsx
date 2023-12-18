// Summary.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import play from "../assets/play.png";
import audioFile from "../components/output_mr.wav";
import { useNavigate } from "react-router-dom";

const Summary = ({ image, content, symbol, link, onClose }) => {
  const [summary, setSummary] = useState("");
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");
  const audioRef = useRef(null);

  // Handler function to update the selected value
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Inside useEffect in Summary.jsx

  useEffect(() => {
    // Make the API request when the component mounts
    axios
      .post("http://localhost:5000/api/summarize") // <-- Use POST method
      .then((response) => {
        const { summary } = response.data;
        setSummary(summary);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Empty dependency array to run the effect only once
  // Empty dependency array to run the effect only once

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col gap-4 items-center text-center bg-white shadow-lg border-2 border-green-800 w-1/2 rounded-lg p-4 my-4 mx-2">
        <p className="">
          <span className="font-semibold text-lg">Summary:</span> <br />
          <ul className="list-disc ml-6 text-left">
            <li>
              Infosys has implemented a salary revision for its employees, with
              an average pay hike below 10%, effective from November 1, 2023.
              Entry-level employees were excluded from this year's annual hikes.
            </li>
            <li>
              The company reported a 3.17% increase in net profit to ₹6,212
              crore in the July-September quarter of fiscal 2023-24. Infosys
              narrowed its revenue growth guidance for the full year to 1-2.5%,
              following a previous reduction from 4-7% to 1-3.5%.
            </li>
            <li>
              Infosys declared an interim dividend of ₹18 per equity share and
              maintained its operating margin guidance at 20%-22%. The company's
              revenue for the September quarter rose by 7% to ₹38,994 crore.
            </li>
          </ul>
        </p>

        <div>
          <p>
            <span className="font-semibold text-lg">Keywords: </span>
          </p>
          <ol className="list-decimal ml-6 text-left">
            <li>Infosys</li>
            <li>Salary revision</li>
            <li>Revenue growth guidance</li>
            <li>Net profit increase</li>
          </ol>
        </div>
        <div>
          <p className="text-green-600 font-bold text-lg">
            <span className="font-semibold text-lg text-black">
              Sentiment Analysis:&nbsp;
            </span>
            Good
          </p>
        </div>

        <button
          className="font-semibold bg-gradient-to-r from-green-500 via-teal-600 to-blue-600 text-white py-2 px-4 rounded-lg text-base cursor-pointer mt-4"
          onClick={()=>{navigate('/dashboard')}}
          aria-label="Close Summary"
        >
          Close
        </button>
        <div className="">
          <div className=" mt-4">
            <label htmlFor="dropdown">Select a language: </label>
            <select
              id="dropdown"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="">-- LANGUAGE --</option>
              <option value="option1">English</option>
              <option value="option2">Marathi</option>
              <option value="option3">Hindi</option>
              <option value="option3">French</option>
              <option value="option3">Spanish</option>
              <option value="option3">Japanese</option>
            </select>
          </div>
          <img
            src={play}
            className="w-10 h-8 ml-28 mt-6"
            onClick={playAudio} // Call playAudio function on image click
            style={{ cursor: "pointer" }} // Add cursor style for better UX
          />
          <audio ref={audioRef} className="hidden" controls>
            <source src={audioFile} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default Summary;
