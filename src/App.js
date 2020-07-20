import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import Intro from "./components/Intro/Intro";
import Explore from "./components/Explore/Explore";
import "./App.scss";

const App = () => {
  const [population, setPopulation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`;
      await axios
        .get(URL)
        .then((res) => {
          setPopulation(res.data.Brastlewark);
        })
        .catch((err) => err);
    };
    fetchData();
  }, []);

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
