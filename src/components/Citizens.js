import React, { useState, useEffect } from "react";
import Citizen from "./Citizen";

export default function Citizens({ population }) {
  const [n, setN] = useState(5);
  console.log(population);
  const citizensPreview = [];
  for (let i = 0; i < 10; i++) {
    citizensPreview.push(population[i]);
  }
  useEffect(() => {}, [n]);
  return (
    <div>
      {population.slice(0, n).map((citizen) => {
        return <Citizen key={citizen.id} citizen={citizen} />;
      })}
      <button onClick={() => setN(n + 5)}>See more Gnomes</button>
    </div>
  );
}
