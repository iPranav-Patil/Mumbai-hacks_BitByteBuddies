import React from "react";
import NewsImg from "../assets/news-img.jpeg";


const UrlCard = ({ details }) => {
  if (!details) {
    return <div>No url...</div>;
  }
  const data_card = [
    {
      Id: 1,
      Info: "Reliance sdfsdfsdfsdPower shares skyrocket after a huge downfall, surprising traders! Dummfsdfsdfsdfsdfsdfy content for news analysis.",
      Image: NewsImg,
    },
    {
      Id: 2,
      Info: "Reliance Power sharedafasfasfasfwqfqfqfesdfsdfsds skyrocket after a huge downfall, surprising traders! Dummy content for news analysis.",
      Image: NewsImg,
    },
    {
      Id: 3,
      Info: "Relifsfsfsdance Power shares fsdfsdfsfsfskyrocket after a huge downfall, surprising traders! Dummy content for newsfsfsfsfss analysis.",
      Image: NewsImg,
    },
  ];
  
  return (
    <div>
      {/* Mapping data_card to card divs */}
      {data_card.map((card) => (
        <div
          key={card.Id}
          className="flex gap-10 items-center bg-white shadow-lg border-2 border-green-800 rounded-lg p-4 my-4 mx-2"
        >
          <div className="border-r-2 border-gray-300 pr-2">
            <img src={card.Image} alt="News" className="w-64 h-32 rounded-lg" />
          </div>
          <div className="text-center p-2">
            <p className="text-base font-bold">{card.Info}</p>
          </div>
          <button
            className="font-semibold bg-gradient-to-r from-green-500 via-teal-600 to-blue-600 text-white py-2 px-4 rounded-lg text-base cursor-pointer"
            onClick={() => handleAnalyzeNews(card.Image, card.Info)}
          >
            Analyze News
          </button>
        </div>
      ))}
    </div>
  );
};

export default UrlCard;
