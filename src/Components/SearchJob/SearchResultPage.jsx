import React from "react";
// import { JobList } from './JobList'
import MapDiv from "./MapDiv";
import { Navbar } from "../HomePage/NavBar";
import { RightContainers } from "./RightContainers";
import { SideBar } from "./SideBar";

export const SearchResultPage = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <MapDiv />
      <RightContainers />
      {/* <JobList /> */}
    </div>
  );
};
