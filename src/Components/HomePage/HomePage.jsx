import React, { useEffect, useState } from "react";
import "./HomePage.css";
import applelogo from "../Images/applelogo.png";
import gplay from "../Images/gplay.png";
import Naukriff from "../Images/Naukriff.png";
import { Navbar } from "./NavBar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { getJobs } from "../../Redux/JobSearch/action";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [job, setJob] = useState("");

  const jobs = useSelector((store) => store.searchData);
  const loading = useSelector((store) => store.searchData.loading);
  const navigate = useNavigate();
  console.log(jobs);
  console.log(job);
  // console.log(loading);
  const dispatch = useDispatch();
  useEffect(() => {}, [handleSearch]);
  function handleSearch() {
    dispatch(getJobs(job));
    setTimeout(() => {
      navigate("/jobs");
    }, 4000);
  }

  return (
    <>
      <Navbar />
      <div
        className="firstDiv"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=600)",
        }}
      >
        <div className="inDiv">
          <h2>Search Jobs</h2>

          <input
            value={job}
            list="languages"
            placeholder="Search for Jobs or Locations"
            onChange={(e) => setJob(e.target.value)}
            type="text"
          />
          <datalist id="languages">
            <option value="Software Developer"></option>
            <option value="MERN Developer"></option>
            <option value="Sales"></option>
            <option value="Data Scientist">Stop being a troll</option>
          </datalist>
          <button onClick={handleSearch}>Search</button>
        </div>
        {loading && <div className="loading the jobs">Loading</div>}
      </div>
      <div className="cardDiv">
        <div className="firstCardLeft">
          <h4>
            Rate How Your Company Win Ambition Box Best Places in India 2022
            Awards
          </h4>
          <p>Your Opinion Matters</p>
          <button>Rate Your Company</button>
        </div>
        <div className="firstCardRight"></div>
        <br />
        <br />
        <div className="secondCardLeft">
          <h3>Jobs</h3>
          <hr />
          <h2>Software Engineer</h2>
          <p>GroundTruth</p>
          <p>0-0years</p>
          <p>Hyderabad,Secundarabad</p>
          <p>Algorithms,html,data structures</p>
          <p>
            ***pre placement offers for candidates that sucessfully complete the
            internship***
          </p>
          <br />
          <p>not disclosed </p>
        </div>
        <div className="secondCardRight">
          <h3>
            Get real time job-updates & instant notification only on the app
          </h3>
          <p>Available on</p>
          <img width="40px" height="30px" src={applelogo} alt="" />
          <img width="40px" height="30px" src={gplay} alt="" />
        </div>
        <div className="thirdLeftDiv">
          <h3>New Jobs In My Alerts</h3>
          <hr />
          <p style={{ textAlign: "center" }}>
            Create Custom Job Alerts For u<br /> Stay informed about the latest
            jobs for you
          </p>
        </div>
        <div className="thirdRightDiv">
          <br />
          <br />
          <img src={Naukriff} alt="" />
          <h4>Naukri Services you might be intersted in</h4>
          <h4>Be a priority Applicant</h4>
          <p>
            Increase your chances of getting shortlisted for the applied jobs
            and getting call from the recruiters
          </p>
          <h4>Increase your visibility by up to 3 times</h4>
          <p>
            Get your profile marked as "featured" and get a higher rank when
            recruiters search for resumes
          </p>
        </div>
        <div className="fourthLeftDiv">
          <h4>Job Application Status</h4>
          <hr />
          <h4>Mern Stack Developer</h4>
          <p>fleapo co.</p>
          <br />
          <br />
          <h4>Mern Stack Developer</h4>
          <p>fleapo co.</p>
        </div>
        <div className="fourthRightDiv">
          <h4>FAQ</h4>
          <hr />
          <p>Frequently Asked Questions</p>
        </div>
        <div className="fifthleftDiv">
          <h4>Two New Recuriter Messages</h4>
          <hr />
          <h4>Supriya Singh Jamwal</h4>
          <p>
            "I am looking for a software engineer to join my company. Please
            contact me if Candidates feel interested."
          </p>
          <h3>Location</h3>
          <p>Nainital,Uttarakhand</p>
        </div>
        <div className="sixthleftDiv"></div>
      </div>
      <Footer />
    </>
  );
};
