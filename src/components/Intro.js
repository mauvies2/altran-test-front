import React from "react";
import { Link } from "react-router-dom";

import GeneralInfo from "./GeneralInfo";

export default function Intro({ population }) {
  return (
    <div className="main-container">
      <h1>welcome to brastlewark</h1>
      <GeneralInfo population={population} />
      <h2>Click here to explore more details</h2>
      <Link to="/explore">
        <button>Explore</button>
      </Link>
    </div>
  );
}
