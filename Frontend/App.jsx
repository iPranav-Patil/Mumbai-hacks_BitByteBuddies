import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/signup";
import Subscription from "./components/subscription";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Navbar from './components/nav';
import Notification from "./components/notification";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/reg" element={<Signup />} />
          <Route path="/not" element={<Notification />} />
          <Route path="/subs" element={<Subscription />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sum" element={<Summary />} />

          <Route path="/" element={<Home />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
