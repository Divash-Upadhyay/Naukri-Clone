import React from "react";
import "./FooterA.css";
import Logo from "../Images/Logo.png";
import gplay from "../Images/gplay.png";
import applelogo from "../Images/applelogo.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";
import linkedin from "../Images/linkedin.png";
export const FooterA = () => {
  return (
    <div className="outerDiv">
      <div className="innerDiv">
        <div>
          <br />
          <br />
          <br />
          <br />
          <img src={Logo} alt="" />
          <p>Connect With us</p>
          <img width="40px" height="30px" src={facebook} alt="" />
          <img width="40px" height="30px" src={instagram} alt="" />
          <img width="40px" height="30px" src={twitter} alt="" />
          <img width="40px" height="30px" src={linkedin} alt="" />
        </div>
        <div>
          <br />
          <br />
          <h4>About Use</h4>
          <h4>Carrers</h4>
          <h4>Employeer Home</h4>
          <h4>Sitemap</h4>
        </div>
        <div>
          <br />
          <br />
          <h4>Help Center</h4>
          <h4>Summons/Notices</h4>
          <h4>Grievances</h4>
          <h4>Report Issue</h4>
        </div>
        <div>
          <br />
          <br />
          <h4>Privacy Policy</h4>
          <h4>Terms & Conditons</h4>
          <h4>Fraud Alert</h4>
          <h4>Trust & Safety</h4>
        </div>
        <div>
          <h4>Apply on the go</h4>
          <p>Get real time job updates on our app</p>
          <img width="40px" height="30px" src={gplay} alt="" />
          <img width="40px" height="30px" src={applelogo} alt="" />
        </div>
      </div>
      <hr />
      <div className="second">
        <p>All trademarks are the property of their respective owners</p>
        <p>All right reserved @2020 info Edge(India) Ltd.</p>
      </div>
    </div>
  );
};
