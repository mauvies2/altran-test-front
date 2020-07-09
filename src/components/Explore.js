import React, { useState } from "react";

import Filter from "./Filter";
import Citizens from "./Citizens";

export default function Explore(props) {
  const { population } = props;
  const [gnomesFiltered, setGnomesFiltered] = useState(population);

  const filter = (query) => {
    console.log(gnomesFiltered);
    setGnomesFiltered(
      population.filter((citizen) =>
        query.name ? citizen.name === query.name : citizen
      )
    );
    setGnomesFiltered(
      gnomesFiltered.filter((citizen) =>
        query.hairColor ? citizen.hair_color === query.hairColor : citizen
      )
    );
  };
  return (
    <section className="explore">
      <Filter filter={filter} />
      <Citizens gnomesFiltered={gnomesFiltered} />
    </section>
  );
}

//  citizen.hair_color === query.hairColor ||
//           (citizen.age >= query.minAge && citizen.age <= query.maxAge) ||
//           (citizen.weight >= query.minWeight &&
//             citizen.weight <= query.maxWeight) ||
//           (citizen.height >= query.minHeight &&
//             citizen.height <= query.maxHeight) ||
//           citizen.friends === query.friends
