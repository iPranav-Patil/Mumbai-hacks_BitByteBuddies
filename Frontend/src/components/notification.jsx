import "./notification.css";
import NewsImg from "../assets/news-img.jpeg";
import Navbar from "./nav";

export default function Notification() {
  return (
    <>
      <Navbar />
      <div className="notification">
        <div className="notif-heading">
          <h2>Daily News And Updates</h2>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Enter search query" />
          <button>Search</button>
        </div>
        <div className="notif-container">
          <div className="notif-card">
            <div className="notif-img">
              <img src={NewsImg}></img>
            </div>
            <div className="notif-title">
              <p>
                Reliance Power shares skyrocket after a huge downfall, suprising
                traders!
              </p>
            </div>
          </div>
          <button className="analyze-btn">Analyze News</button>
        </div>

        <div className="notif-container">
          <div className="notif-card">
            <div className="notif-img">
              <img src={NewsImg}></img>
            </div>
            <div className="notif-title">
              <p>
                Reliance Power shares skyrocket after a huge downfall, suprising
                traders!
              </p>
            </div>
          </div>
          <button className="analyze-btn">Analyze News</button>
        </div>

        <div className="notif-container">
          <div className="notif-card">
            <div className="notif-img">
              <img src={NewsImg}></img>
            </div>
            <div className="notif-title">
              <p>
                Reliance Power shares skyrocket after a huge downfall, suprising
                traders!
              </p>
            </div>
          </div>
          <button className="analyze-btn">Analyze News</button>
        </div>

        <div className="notif-container">
          <div className="notif-card">
            <div className="notif-img">
              <img src={NewsImg}></img>
            </div>
            <div className="notif-title">
              <p>
                Reliance Power shares skyrocket after a huge downfall, suprising
                traders!
              </p>
            </div>
          </div>
          <button className="analyze-btn">Analyze News</button>
        </div>
      </div>
    </>
  );
}
