import React, { useState } from "react";
import { Link } from "react-router-dom";

import Filter from "../Filter/Filter";
import Citizens from "../Citizens/Citizens";

const Explore = (props) => {
  const { population } = props;

  // State of gnomes to be display
  const [popuFilter, setPopuFilter] = useState(population);

  // Filter query
  const filter = (query) => {
    let queryFiltered = population;

    if (query.name) {
      queryFiltered = queryFiltered.filter(
        (item) => item.name.toLowerCase() === query.name.toLowerCase()
      );
    }
    if (query.hair_color) {
      queryFiltered = queryFiltered.filter(
        (item) =>
          item.hair_color.toLowerCase() === query.hair_color.toLowerCase()
      );
    }
    if (query.age) {
      queryFiltered = queryFiltered.filter(
        (item) => item.age === parseInt(query.age)
      );
    }
    if (query.friends) {
      queryFiltered = queryFiltered.filter(
        (item) => item.friends.length === parseInt(query.friends)
      );
    }
    if (query.profession) {
      queryFiltered = queryFiltered.filter(
        (item) =>
          item.professions.filter(
            (profession) =>
              profession.toLowerCase() === query.profession.toLowerCase()
          ).length > 0
      );
    }
    setPopuFilter(queryFiltered);
  };
  return (
    <section className="explore">
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <Filter filter={filter} />
      <Citizens popuFilter={popuFilter} />
    </section>
  );
};

export default Explore;
