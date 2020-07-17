import React, { useState } from "react";
import Citizen from "./Citizen";

const Citizens = (props) => {
  // State of number of gnomes to be display on list
  const [numGnomes, setNumGnomes] = useState(5);

  return (
    <div className="citizens">
      {props.popuFilter.slice(0, numGnomes).map((citizen) => {
        return <Citizen key={citizen.id} citizen={citizen} />;
      })}
      <button onClick={() => setNumGnomes(numGnomes + 5)}>
        See more Gnomes
      </button>
    </div>
  );
};

export default Citizens;
