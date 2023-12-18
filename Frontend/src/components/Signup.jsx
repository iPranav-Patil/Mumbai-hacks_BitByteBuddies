import { React, useState } from "react";
import LoginForm from "./Login";
import RegistrationForm from "./Register";
import vector from "../assets/vector-final.jpeg"

const Signup = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin((prev) => !prev);
  };
  
  const coloredDivStyle = {
    transition: "transform 0.3s ease-in-out",
    transform: showLogin ? "translateX(0)" : "translateX(100%)",
    zIndex: "2",
    // backgroundColor: showLogin ? "#4299e1" : "",
  };

  const maindiv = {
    transition: "transform .5s ease-in-out .3s",
    transform: showLogin ? "translateX(0)" : "translateX(-100%)",
    zIndex: "0",
  };

  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="flex w-5/6 h-[600px] overflow-hidden  border border-green-800 rounded-xl">
        {/* Colored Div */}
        <div className="w-1/2 bg-gradient-to-r from-green-500 via-teal-600 to-blue-600 flex justify-center items-center" style={coloredDivStyle}>
          <img src={vector} className="w-5/6 rounded-lg"/>
        </div>

        {/* Login or Registration Form */}
        <div className="w-1/2 p-8 relative" style={maindiv}>
          {showLogin ? (
            <LoginForm onToggleForm={handleToggleForm} />
          ) : (
            <RegistrationForm onToggleForm={handleToggleForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
