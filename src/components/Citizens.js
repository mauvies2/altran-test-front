import React, { useState } from "react";
import Citizen from "./Citizen";

export default function Citizens(props) {
  // State of gnomes to be display on list
  const [numGnomesDisplayed, setnumGnomesDisplayed] = useState(5);

  return (
    <div className="citizens">
      {props.gnomesFiltered.slice(0, numGnomesDisplayed).map((citizen) => {
        return <Citizen key={citizen.id} citizen={citizen} />;
      })}
      <button onClick={() => setnumGnomesDisplayed(numGnomesDisplayed + 5)}>
        See more Gnomes
      </button>
    </div>
  );
}
