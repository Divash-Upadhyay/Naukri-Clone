import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./JobDescription.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../Redux/JobDes/action";
import { store } from "../../Redux/store";
import { useState } from "react";
import { Navbar } from "../HomePage/NavBar";
import Footer from "../Footer/Footer";

export const JobDescription = () => {
  const [btn, setBtn] = useState("Apply");
  const params = useParams();
  // const data = useSelector((store) => store.singleJob.jobs.jobData);

  const [data, setData] = useState([]);
  const { id } = params;

  // console.log(store.getState());
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(id);
    axios
      .get(`https://divash-api.herokuapp.com/ids/${id}`)
      .then((response) => {
        setData(response.data.jobData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setData, id]);
  console.log(data);

  return (
    <>
      <Navbar />
      {data.length !== 0 && (
        <div className="minDiv">
          <div className="nameDiv">
            <div className="name">
              <div>
                {" "}
                <button
                  onClick={() => {
                    btn == "Apply" ? setBtn("Applied") : setBtn("Apply");
                  }}
                  className="aply"
                >
                  {btn}
                </button>
              </div>
              <h2 style={{ color: "#333333" }}>{data.name}</h2>
              <p style={{ color: "#000000" }}>
                Company Name: {data.company_name}
              </p>
              <p style={{ color: "#666666" }}>Experience: {data.experience}</p>
              <p style={{ color: "#666666" }}>Salary: ₹{data.salary} PA.</p>
              <p style={{ color: "#666666" }}>Location: {data.location}</p>
              <hr />

              <p style={{ color: "#666666" }}>posted some days ago</p>
            </div>
          </div>
          <div className="interested">
            <div className="in">
              <h3>Jobs You might be interested in</h3>
              <div>
                <h4>Full Stack Web Developer</h4>
                <p>hyderabad</p>
              </div>
              <hr />
              <div>
                <h4>Business analyst</h4>
                <p>Mumbai</p>
              </div>
              <hr />
              <div>
                <h4>Data Scientist</h4>
                <p>Pune</p>
              </div>
            </div>
          </div>
          <div className="highdiv">
            <div className="job">
              <h4>Job Highlights</h4>
              <hr />
              <ul>
                {data.jobhighlights.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            </div>
            <div className="des">
              <h4>Job Description</h4>
              <hr />
              <ul>
                {data.jobdescription.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
              <hr />
              <h4>Roles</h4>
              <ul>
                {data.role.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
              <h4>Skills</h4>
              <hr />
              <ul>
                {data.skills.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="reviews">
            <div>
              <h3>Reviews</h3>
              <hr />
              <h4>Jobs In good cities</h4>
              <p>rated 5 Stars</p>
              <h4>Likes</h4>
              <p>Good Compensation, Good learning curve</p>
            </div>
          </div>
          <div className="perks">
            <div>
              <h3>Benefits And Perks</h3>
              <p>31 Users reported these benefits</p>
              <hr />
              <ul>
                <li>Cafeteria</li>
                <li>Transport</li>
                <li>Free Food</li>
                <li>Soft Skill Training</li>
                <li>Health Insurance</li>
              </ul>
            </div>
          </div>
          <div className="suggested">
            <div>
              <h4>Suggested Skills For You</h4>
              <p>Get Better Jobs And Higher Salaries.Suggested Course</p>
              <hr />
              <h4>Personal Development</h4>
              <p>3690+ courses from top platforms</p>
              <hr />
              <h4>Good Communication Skills Development</h4>
              <p>3660+ courses from top platforms</p>
              <hr />
              <h4>Growth Hack</h4>
              <p>Learn from experienced workers</p>
            </div>
          </div>
          <div className="about">
            <div>
              <h4>About Company</h4>
              <hr />
              <p>
                this company is a subsidiary Solutions Group, Japan. We
                specialize in providing a wide gamut of IT services to our
                clients worldwide with utmost quality, lower costs and timely
                delivery. Our constant endeavor is to help our clients to reduce
                the total cost of IT operations significantly while utilizing
                the vast skilled IT resources available in India with an onsite
                / off-shore delivery model. Since its inception in 2002, Yamaha
                Motor Solutions India has grown at an enormous rate and even
                after a decade of continuous & expanding operations, we have
                remained true to our core principles and vision. Today, our
                solutions provide strategic advantage to several most admired
                organizations in the world as we have long-standing and vibrant
                partnerships with numerous companies across the globe. In case
                of any query, please feel free to contact.
              </p>
            </div>
          </div>
          <div className="beware">
            <h5>Beware of impostors</h5>
            <p>
              Naukri.com does not promise a job or an interview in exchange of
              money.fraudsters may ask you to pay in the pretext of registration
              fee, refundable fee ,please ignore these types of fraudsters
            </p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};
