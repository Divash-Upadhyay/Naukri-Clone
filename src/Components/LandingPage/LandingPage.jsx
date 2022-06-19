import { Box, Input, Button, Grid, Stack, Image } from "@chakra-ui/react";
import React from "react";
import { Navigation } from "./Navigation";
import "./LandingPage.css";
import Img1 from "../Images/Img1.png";
import Img2 from "../Images/Img2.png";
import Img3 from "../Images/Img3.png";
import Img4 from "../Images/Img4.png";
import { FooterA } from "../Footer/FooterA";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  return (
    <>
      <Navigation />
      <br />
      <div className="outercc">
        <h1>Find Your Dream Jobs Now</h1>
        <Box>5 lakh+jobs for you to explore</Box>
      </div>

      <br />

      <Box className="inputBox">
        <Input name="email" placeholder="Enter Skills/designations/companies" />
        <Input placeholder="Select Experience" />
        <Input placeholder="Enter Loaction" />
        <Button onClick={handleClick} type="submit">
          Search
        </Button>
      </Box>
      <Grid className="grid">
        <Box>
          <img
            className="imgn"
            width="450px"
            height="130px"
            src={Img1}
            alt=""
          />
        </Box>
        <Box>
          <Button className="register">Register now</Button>
        </Box>
      </Grid>
      <Box className="outer">
        {" "}
        <h1>Trending on Naukri Today</h1>
      </Box>

      <Box className="outer">
        <Box className="mnDiv">
          <div>
            <h5>Analytics</h5>
            <p>9.2K+ jobs</p>
          </div>
          <div>
            <h5>Analytics</h5>
            <p>9.2K+ jobs</p>
          </div>
          <div>
            <h5>HR</h5>
            <p>4.9K+ jobs</p>
          </div>
          <div>
            <h5>Engineering</h5>
            <p>3.1K+ jobs</p>
          </div>
          <div>
            <h5>Sales</h5>
            <p>10.7K+ jobs</p>
          </div>
        </Box>
      </Box>
      <Box className="outer">
        {" "}
        <h1>Explore Top Companies Hiring Now</h1>
      </Box>

      <Box className="outer">
        <Box className="mnDiv">
          <div>
            <h5>MNC's</h5>
            <p>1.3K+ are actively hiring</p>
          </div>
          <div>
            <h5>Fortune 500</h5>
            <p>91 are actively hiring</p>
          </div>
          <div>
            <h5>Unicorns</h5>
            <p>82 are actively hiring</p>
          </div>
          <div>
            <h5>Startups</h5>
            <p>169 are actively hiring</p>
          </div>
          <div>
            <h5>Internet</h5>
            <p>599 are actively hiring</p>
          </div>
        </Box>
      </Box>
      <Grid className="grid1">
        <Box>
          <img width="800px" height="160px" src={Img2} alt="" />
        </Box>
        <Box>
          <Button className="register1">Register now</Button>
        </Box>
      </Grid>
      <Box className="outer1">
        <Box className="mnDiv1">
          <img width="300px" height="250px" src={Img3} alt="" />

          <div>
            <h6>Data Science</h6>
            <h5>Artificial Intelligence</h5>
            <p>
              learn in demand AI skills like Deep learning ,NLP,Computer vision
              and more for career growth across different roles
            </p>
          </div>
          <div>
            <h6>Cloud Technologies</h6>
            <h5>AWS</h5>
            <p>
              Get certified for high demand cloud computing skills for CLoud
              Practitioner,Architect, Developer, and Operation roles.
            </p>
          </div>
          <div>
            <h6>Programming</h6>
            <h5>Data Structures And Algorithms</h5>
            <p>
              master DS and Algorithms for entrance level engineering roles in
              product companies and for competitive programming.
            </p>
          </div>
        </Box>
      </Box>
      <Box className="lastBox">
        <img width="1097px" src={Img4} alt="" />
      </Box>
      <FooterA />
    </>
  );
};
