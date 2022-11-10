import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import ServiceEntry from "./pages/ServiceEntry/ServiceEntry";
import UserRegistration from "./pages/UserRegistration/UserRegistration";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/service" element={<ServiceEntry />} />
      <Route path="/user" element={<UserRegistration />} />
    </Routes>
  );
};

export default App;
