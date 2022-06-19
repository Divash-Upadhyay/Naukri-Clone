import React, { useEffect } from "react";
import styled from "./MapDiv.module.css";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom"
// import { SkeletonMapDiv } from "../Skeleton/SkeletonMapDiv";
// import { AuthContext } from '../Register/AuthContextProvider'
import { SingleMapDiv } from "./SingleMapDiv";
import { store } from "../../Redux/store";
import { loadData } from "../../Redux/JobSearch/localStorage";

const MapDiv = () => {
  const data = loadData("data");
  const data1 = useSelector((store) => store.searchData);
  const loading = useSelector((state) => state.searchData.loading);
  console.log("data", data);
  console.log("data1", data1);
  console.log(store.getState());

  if (data.results.length === 0 && !loading) {
    return (
      <div className={styled.container}>
        <div className={styled.box}>
          <h4
            style={{ color: "#091e42", textAlign: "center", fontSize: "22px" }}
          >
            No Such Jobs
          </h4>
        </div>
      </div>
    );
  }

  return (
    <div className={styled.container}>
      {data && data.results.map((el) => <SingleMapDiv key={el.id} {...el} />)}
    </div>
  );
};

export default MapDiv;
