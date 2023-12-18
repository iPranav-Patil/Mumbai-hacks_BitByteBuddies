import React from "react";
import { useNavigate } from "react-router-dom";
import backbtn from "../assets/back-btn.png"

const Subscription = () => {
  const subscriptionValue = 0;
  const naviagte = useNavigate();
  const prices = [0, 5000, 10500];
  const plans = [
    {
      name: "Free Trial",
      desc: "A Free trial Version with Limited Features, test purpose",
      id:0,
      price: 12,
      billingFrequency: "-", 
      isMostPop: false,
      features: [
        "Article Analysis Top 3",
        "Sentinment Analysis (10)",
        "Chatbot",
        "Summary (2 free)",
      ],
    },
    {
        name: "Standard",
        desc: "A kickstart and budget friendly Plan to access all of our features.",
        id:1,
        price: 35,
        billingFrequency: "Half-year", 
        isMostPop: true,
        features: [
          "Article Analysis Top 7",
          "Sentinment Analysis (50)",
          "Chatbot",
          "Summary (10 free)",
          "Text to Speech (English)",
          "Keywords",
          "Personalized News",
        ],
      },
    {
      name: "Bumper",
      desc: "A complete and limitless access to all our features .",
      id:2,
      price: 60,
      billingFrequency: "year",
      isMostPop: false,
      features: [
        "Article Analysis No limit",
        "Sentinment Analysis (Unlimited)",
        "Chatbot",
        "Summary (No Limit)",
        "Text to Speech (Multilingual)",
        "Keywords",
        "Personalized News",
      ],
    },
  ];

  return (
    <section className="py-14">
      <div className="font-poppins max-w-screen-xl text-md mx-auto px-4 text-gray-600 md:px-8 ">
        <div className="flex justify-start relative max-w-xl mx-auto sm:text-center">
          <img onClick={()=>{naviagte('/dashboard')}} className="pr-32" src={backbtn}/>
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Pricing for all sizes
          </h3>

        </div>
        <div className="mt-16 justify-center rounded-md gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border-4 mt-6 sm:mt-0 ${
                item.isMostPop ? "mt-10" : ""
              }`}
            >
              {item.isMostPop ? (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border-2 shadow-xl bg-white text-center text-green-800 text-md font-semibold">
                  Most popular
                </span>
              ) : (
                ""
              )}
              <div className="p-8 space-y-4 rounded-sm">
                <span className="text-green-700 font-medium">{item.name}</span>
                <div className="text-gray-800 text-3xl font-semibold">
                  ₹{" "}
                  {subscriptionValue > 0
                    ? item.price - subscriptionValue
                    : prices[item.id]}{" "}
                  /
                  {item.billingFrequency}
                </div>
                <p>{item.desc}</p>
                <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-green-700 hover:bg-green-600 active:bg-green-700">
                  Get Started
                </button>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 text-gray-800 font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
