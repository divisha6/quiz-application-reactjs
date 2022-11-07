import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    // <!-- Navbar -->
    <div style={{marginBottom:"15px", width:"100%"}}>
      <div className={classes.navbar}>
        <img
          src={logo}
          alt=""
          width="50"
          height="50"
          className="Logo"
          style={{ marginTop: "20px", marginLeft: "10px" }}
        />
        <h3 style={{ marginTop: "27px", marginLeft: "20px", color: "white" }}>
          Quiz-In
        </h3>
        <ul className={classes.Links}>
          <li style={{ fontWeight: "bolder", color: "white" }}>
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </li>
          <li
            style={{ marginLeft: "15px", fontWeight: "bolder", color: "white" }}
          >
            <Link
              to="/quiz"
              style={{ textDecoration: "none", color: "white" }}
            >
              Attempt a Quiz
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}