import React from "react";

import Filter from "./Filter";
import Citizens from "./Citizens";

export default function Explore({ population }) {
  console.log(population);
  return (
    <section className="explore">
      <Filter population={population} />
      <Citizens population={population} />
    </section>
  );
}
