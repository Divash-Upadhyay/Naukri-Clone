import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Components/HomePage/HomePage";
import { LandingPage } from "../Components/LandingPage/LandingPage";
import { SearchResultPage } from "../Components/SearchJob/SearchResultPage";
import { JobDescription } from "../Components/JobDescription/JobDescription";
import Login from "../Components/Login/Login";
import Signup from "../Components/SignUp/Signup";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/jobs" element={<SearchResultPage />} />
      <Route exact path="/jobdetails/:id" element={<JobDescription />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
