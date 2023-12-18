import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onToggleForm }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center h-full overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-green-700 underline">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2 text-lg">
            <label
              for="email"
              className="block  font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block  font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-md text-green-600 hover:underline ">
            Forget Password?
          </a>
          <div className="mt-6">
            <button onClick={()=>{navigate('/dashboard')}} className="bg-gradient-to-r from-green-500 via-teal-600 to-blue-600 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform  rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-md font-light text-center text-gray-700">
          {" "}
          Don't have an account? &nbsp;
          <a
            href="#"
            onClick={onToggleForm}
            className=" text-green-600 font-semibold" 
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
