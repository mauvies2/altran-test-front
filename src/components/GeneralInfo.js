import React from "react";

export default function GeneralInfo({ population }) {
  const totalPopulation = population.length;

  const ageSum = population
    .map((citizen) => citizen.age)
    .reduce((a, b) => a + b, 0);

  const avgAge = (ageSum / totalPopulation).toLocaleString(undefined, {
    maximumFractionDigits: 1,
  });

  const weightSum = population
    .map((citizen) => citizen.weight)
    .reduce((a, b) => a + b, 0);

  const avgWeight = (weightSum / totalPopulation).toLocaleString(undefined, {
    maximumFractionDigits: 1,
  });

  const heightSum = population
    .map((citizen) => citizen.height)
    .reduce((a, b) => a + b, 0);

  const avgHeight = (heightSum / totalPopulation).toLocaleString(undefined, {
    maximumFractionDigits: 1,
  });

  const friendsSum = population
    .map((citizen) => citizen.friends.length)
    .reduce((a, b) => a + b, 0);

  const avgFriends = (friendsSum / totalPopulation).toLocaleString(undefined, {
    maximumFractionDigits: 1,
  });

  const hairColors = population.map((citizen) => citizen.hair_color);

  const citizensProfessions = population.map((citizen) => citizen.professions);

  let professions = [];
  for (let i = 0; i < citizensProfessions.length; i++) {
    professions = professions.concat(citizensProfessions[i]);
  }

  console.log(professions);

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
      <div>
        <h3>Citizens</h3>
        <div>{totalPopulation}</div>
      </div>
      <div>
        <h3>Median Age</h3>
        <div>{avgAge}</div>
      </div>
      <div>
        <h3>Median Weight</h3>
        <div>{avgWeight}</div>
      </div>
      <div>
        <h3>Median Height</h3>
        <div>{avgHeight}</div>
      </div>
      <div>
        <h3>Average number of friends</h3>
        <div>{avgFriends}</div>
      </div>
      <div>
        <h3>Most Coomon Hair Color</h3>
        <div>{commonValue(hairColors)}</div>
      </div>
      <div>
        <h3>Most Common Proffesion</h3>
        <div>{commonValue(professions)}</div>
      </div>
    </section>
  );
}
