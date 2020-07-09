import React, { useState, useEffect } from "react";
import axios from "axios";
import GeneralInfo from "./GeneralInfo";

import "./App.css";

const App = () => {
  const [population, setPopulation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`
        )
        .then((res) => {
          setPopulation(res.data.Brastlewark);
        })
        .catch((err) => err);
    };
    fetchData();
  }, []);
  console.log(population);

  return (
    population.length > 0 && (
      <div className="main-container">
        <h2>You are in Brastlewark!</h2>
        <GeneralInfo population={population} />
        <h3>Click here to explore more details</h3>
        <button>Explore</button>
      </div>
    )
  );
};

export default App;
