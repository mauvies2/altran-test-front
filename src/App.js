import React, { useState, useEffect } from "react";
import axios from "axios";

import { Switch, Route } from "react-router-dom";

import Intro from "./components/Intro";
import Explore from "./components/Explore";
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
  // console.log(population);
  return (
    population.length > 0 && (
      <div className="app">
        <img
          className="background-img"
          src={require("./img/brastlewark2.jpg")}
          alt="background"
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Intro population={population} />}
          ></Route>
          <Route
            exact
            path="/explore"
            render={() => <Explore population={population} />}
          ></Route>
        </Switch>
      </div>
    )
  );
};

export default App;
