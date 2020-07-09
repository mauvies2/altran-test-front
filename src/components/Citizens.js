import React, { useState } from "react";
import Citizen from "./Citizen";

export default function Citizens(props) {
  const [numGnomesDisplayed, setnumGnomesDisplayed] = useState(5);

  //   const queryIsEmpty = (query) => {
  //     for (var key in query) {
  //       if (query.hasOwnProperty(key)) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   };

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
