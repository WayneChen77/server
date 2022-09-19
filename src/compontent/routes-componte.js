import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage-compontent";
import Login from "./login-compontent";
import Notfound from "./notfound-component";
import Register from "./register-compontent";
import Profile from "./profile-component";
import Mycarts from "./mycarts-component";

const Routess = () => {
  return (
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/" exact element={<Homepage />} />
      <Route path="/profile/*" element={<Profile />} />

      <Route path="/user" exact element={<Profile />} />
      <Route path="/mycarts" exact element={<Mycarts />} />
      <Route path="/*" exact element={<Notfound />} />
    </Routes>
  );
};

export default Routess;
