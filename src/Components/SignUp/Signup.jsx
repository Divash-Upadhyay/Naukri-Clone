import React, { useRef, useState } from "react";
import styles from "./Signup.module.css";
// import { useAuth } from "./contexts/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
// import SigninNavbar from "./SigninNavbar";

export default function Signup() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    gender: "",
  });

  function handleSubmit() {
    axios({
      method: "POST",
      url: "https://divash-api.herokuapp.com/user/signup",
      data: data,
    })
      .then((Response) => {
        console.log("Success");
        alert("Successfully Registered");
      })
      .catch((error) => {
        console.log("Error");
      });
  }
  function handleChange(e) {
    let value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  }
  console.log(data);

  return (
    <>
      <div className={styles.outer}>
        <div>
          <h1 className={styles.regi}>Sign Up</h1>
          {error && <p className={styles.err}>{error}</p>}
          {/* <form onSubmit={handleSubmit} className={styles.form}> */}
          <div className={styles.outerName} id="email">
            <input
              placeholder="Enter Username"
              className={styles.names}
              name="username"
              value={data.username}
              onChange={handleChange}
              type="text"
              required
            />
          </div>
          <div className={styles.outerName} id="password">
            <input
              placeholder="Password"
              className={styles.names}
              name="password"
              value={data.password}
              type="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.outerName} id="password-confirm">
            <input
              placeholder="Enter Mobile Number"
              className={styles.names}
              type="number"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.outerName} id="password-confirm">
            <input
              placeholder="Enter Email"
              className={styles.names}
              type="email"
              value={data.email}
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.outerName} id="password-confirm">
            <input
              placeholder="Enter Your Gender"
              className={styles.names}
              type="gender"
              value={data.gender}
              name="gender"
              onChange={handleChange}
              required
            />
          </div>

          <button onClick={handleSubmit} className={styles.btn} type="submit">
            Sign Up
          </button>
          {/* </form> */}
        </div>

        <h4 className={styles.acc}>
          Already have an account?{" "}
          <Link className={styles.link} to="/login">
            <h4 className={styles.link}>Log In</h4>
          </Link>
        </h4>
      </div>
    </>
  );
}
