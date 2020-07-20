import React from "react";

const GeneralInfo = ({ population }) => {
  const totalPop = population.length;

  const avg = (key) => {
    const sum = population
      .map((citizen) => citizen[key])
      .reduce((a, b) => a + b, 0);

    const calcAvg = (sum / totalPop).toLocaleString(undefined, {
      maximumFractionDigits: 1,
    });

    return calcAvg;
  };
  const avgFriends = (key) => {
    const sum = population
      .map((citizen) => citizen[key].length)
      .reduce((a, b) => a + b, 0);

    const calcAvg = (sum / totalPop).toLocaleString(undefined, {
      maximumFractionDigits: 1,
    });

    return calcAvg;
  };
  // Array of all hair colors
  const hairColors = population.map((citizen) => citizen.hair_color);

  // Array of all professions
  const profArray = population.map((citizen) => citizen.professions);

  let professions = [];
  for (let i = 0; i < profArray.length; i++) {
    professions = professions.concat(profArray[i]);
  }

  const commonValue = (array) => {
    let result,
      best = -1, // Initialize the comparison variable
      lookup = {}; // Hashmap for essentially constant lookup
    for (let i = 0; i < array.length; i++) {
      if (lookup[array[i]] === undefined) {
        lookup[array[i]] = 0;
      }
      lookup[array[i]]++;
      if (lookup[array[i]] > best) {
        best = lookup[array[i]];
        result = array[i];
      }
    }
    return result;
  };

  return (
    <section className="general-info">
      <div className="general-info-card">
        <h3>Citizens</h3>
        <div>{totalPop}</div>
      </div>
      <div className="general-info-card">
        <h3>Median Age</h3>
        <div>{avg("age")}</div>
      </div>
      <div className="general-info-card">
        <h3>Median Weight</h3>
        <div>{avg("weight")}</div>
      </div>
      <div className="general-info-card">
        <h3>Median Height</h3>
        <div>{avg("height")}</div>
      </div>
      <div className="general-info-card">
        <h3>Avg friends</h3>
        <div>{avgFriends("friends")}</div>
      </div>
      <div className="general-info-card">
        <h3>Common Hair Color</h3>
        <div>{commonValue(hairColors)}</div>
      </div>
      <div className="general-info-card">
        <h3>Common Proffesion</h3>
        <div>{commonValue(professions)}</div>
      </div>
    </section>
  );
};

export default GeneralInfo;
