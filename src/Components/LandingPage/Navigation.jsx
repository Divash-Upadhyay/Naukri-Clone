import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/login");
  }
  function handleSignup() {
    navigate("/signup");
  }
  return (
    <div>
      <div className="tdiv">
        <div className="tdiv2">
          <img
            src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
            alt=""
          />
          <div className="tdiv3" style={{ height: "250px" }}>
            <div>{/* <i class="fab fa-gratipay"></i>*/}Jobs</div>
            <hr />
            <div>
              {/* <i class="fas fa-cloud-meatball"></i> */}
              Food & Drink
            </div>
            <hr />
            <div>
              {/* <i class="fas fa-charging-station"></i> */}
              Vitamin & Supplement
            </div>
            <hr />
            <div>
              {/* <i class="fas fa-weight"></i> */}
              Weigth Management
            </div>
            <hr />
            <div>
              {/* <i class="fas fa-child"></i> */}
              Child Care
            </div>
            <hr />
            <div>
              {/* <i class="fas fa-running"></i> */}
              Protien & Fitness
            </div>
            <hr />
            <div>
              {/* <i class="fas fa-allergies"></i> */}
              Skin & Health Care
            </div>
            <hr />
            <div>
              {/* <i class="fas fa-user-check"></i> */}
              Personal Care
            </div>
          </div>
        </div>
        <div className="tdiv2">
          Jobs
          {/* <i
            class="fas fa-angle-down "
            style="font-size: 10px; color: #FFFFFF;"
          ></i> */}
          <div className="tdiv3" style={{ height: "310px" }}>
            <div>
              <h3>Popular Categories</h3>
            </div>
            <hr />
            <div>IT Jobs</div>
            <br />
            <div>Sales Jobs</div>
            <br />
            <div>Marketing Jobs</div>
            <br />
            <div>Data Science Jobs</div>
            <br />
            <div>HR Jobs</div>
            <br />
            <div>Engineering Jobs</div>
          </div>
        </div>
        <div className="tdiv2">
          Companies
          {/* <i
            class="fas fa-angle-down "
            style="font-size: 10px; color: #FFFFFF;"
          ></i> */}
          <div className="tdiv3" style={{ height: "270px" }}>
            <div>
              <h3>Explore Categories</h3>
            </div>
            <hr />
            <div>Unicorn's </div>
            <br />
            <div>MNC's</div>
            <br />
            <div>StartUp</div>
            <br />
            <div>Product Based</div>
            <br />
            <div>Internet</div>
          </div>
        </div>
        <div className="tdiv2">
          Services
          <div className="tdiv3" style={{ height: "400px" }}>
            <div>
              <h3>Resume Writing</h3>
            </div>
            <hr />
            <div>Text Resume</div>
            <br />
            <div>Virtual Resume</div>
            <br />
            <div>Resume Critique</div>
            <br />
            <br />
            <div>
              <h3>Find Jobs</h3>
            </div>
            <hr />
            <div>Jobs 4u</div>
            <br />
            <div>Priority Applicant</div>
          </div>
        </div>
        <div className="tdiv2">
          Resources
          <div className="tdiv3" style={{ height: "240px" }}>
            <div>
              <h3>Free Resume Resources</h3>
            </div>
            <hr />
            <div>Resume Maker For Freshers</div>
            <br />
            <div>Resume Quality Score</div>
            <br />
            <div>Resume Samples</div>
            <br />
            <div>Job Letter Samples</div>
          </div>
        </div>
        <div className="tdiv2">
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="tdiv2">
          <button onClick={handleSignup}>Regsiter</button>
        </div>
        <div className="tdiv2">
          For Employees
          <div className="tdiv3" style={{ height: "240px" }}>
            <div>
              <h3>Buy Online</h3>
            </div>
            <hr />
            <div>Our Hiring Solutions</div>
            <br />
            <div>Resume Quality Score</div>
            <br />
            <div>Employer Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};
