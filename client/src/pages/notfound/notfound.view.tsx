import React from "react";
import "../../App.css";
import "./notfound.css";
import { Link } from "react-router-dom";
import { homepath } from "../home/home.presenter";

export const Notfound = (): JSX.Element => (
  <div className="container">
    <div className="container-item font text">
      Page does not exist. Click to go back
    </div>
    <div className="container-item">
      <Link className="button font" to={homepath}>
        Home.
      </Link>
    </div>
  </div>
);
