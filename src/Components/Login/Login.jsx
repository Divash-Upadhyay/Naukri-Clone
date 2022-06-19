import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";
import {
  getAuthFailure,
  getAuthRequest,
  getAuthSuccess,
} from "../../Redux/Auth/action";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  console.log(auth);
  const navigate = useNavigate();

  function handleSubmit() {
    setLoading(true);
    setError(false);
    axios({
      method: "POST",
      url: "https://divash-api.herokuapp.com/user/login",
      data: data,
    })
      .then((Response) => {
        console.log("Success", Response.data);
        alert("Successfully Logged In");
        setLoading(false);
        setError(false);
        const success = getAuthSuccess(Response.data);
        dispatch(success);
        navigate("/home");
      })
      .catch((error) => {
        console.log("Error");
        setLoading(false);
        setError(true);
      });
  }

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  console.log(data);
  return (
    <>
      <div className={styles.outer}>
        <div>
          <h1 className={styles.regi}>Log In</h1>
          {error && <p className={styles.err}>error</p>}
          {loading && <p className={styles.err}>Loading...</p>}
          {/* <form onSubmit={handleSubmit}> */}
          <div className={styles.outerName} id="email">
            <input
              className={styles.names}
              placeholder="Enter your registered username"
              type="text"
              name="username"
              value={data.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.outerName} id="password">
            <input
              className={styles.names}
              placeholder="Enter the Password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className={styles.btn} onClick={handleSubmit}>
            {" "}
            Log In{" "}
          </button>
          {loading && <div>Loading</div>}
          {error && <div>Username or password incorrect</div>}
          <div lassName={styles.acc}>
            <h4 className={styles.link}>Forgot Password?</h4>
          </div>
        </div>

        <h4 lassName={styles.acc}>
          Need an account?{" "}
          <Link to="/signup">
            <h4 className={styles.link}>Sign Up</h4>
          </Link>
        </h4>
      </div>
    </>
  );
}
