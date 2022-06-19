import React, { useState, useContext } from "react";
import styled from "./MapDiv.module.css";
// import { AuthContext } from "../Register/AuthContextProvider";
import { Link } from "react-router-dom";
import "./SingleMapDiv.css";

export const SingleMapDiv = ({
  _id,
  id,
  company_name,
  name,
  skills,
  rating,
  experience,
  salary,
  location,
  jobdescription,
  jobhighlights,
  role,
}) => {
  const [isSave, setIsSave] = useState(false);
  // const { setCount } = useContext(AuthContext)
  // console.log(_id);

  const handleSaveAndCount = (key) => {
    setIsSave((prev) => !prev);
    if (isSave) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="mainDiv" key={id}>
      <div className="scndDiv">
        <h4>{name}</h4>
        <p style={{ color: "#091E42", fontSize: "14px" }}>{company_name}</p>
        <div className="indiv">
          <div>
            <p className="font">Experience:0-{experience} years</p>
          </div>
          <div>
            <p className="font">{salary} PA.</p>
          </div>
          <div>
            <p className="font">Location:{location}</p>
          </div>
        </div>
        <div className="font">{jobdescription[0]}</div>
        {/* {skills.map((el) => (
        <div className="skilldiv">
          <p>{el}</p>
        </div>
      ))} */}
        <p>Rating: {rating}</p>
        <Link to={`/jobdetails/${_id}`}>View</Link>
      </div>
    </div>
  );
};
