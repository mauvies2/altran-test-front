import React from "react";
import { Link } from "react-router-dom";

import GeneralInfo from "./GeneralInfo";

export default function Intro({ population }) {
  return (
    <div className="main-container">
      <h2>You are in Brastlewark!</h2>
      <GeneralInfo population={population} />
      <h3>Click here to explore more details</h3>
      <button>
        <Link to="/explore">Explore</Link>
      </button>
    </div>
  );
}
