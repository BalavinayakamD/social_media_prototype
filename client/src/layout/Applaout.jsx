import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import AddPage from "../pages/AddPage/AddPage";
import ProfilePage from "../pages/ProfiePage/ProfilePage";
import Bottom from "../components/bottom/Bottom";

function Applaout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Bottom />
    </>
  );
}

export default Applaout;
