import React from "react";
import ReactDOM from "react-dom";
import GeneralInfo from "./GeneralInfo";
import { render } from "@testing-library/react";

const population = [
  {
    id: 0,
    name: "Tobus Quickwhistle",
    thumbnail:
      "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
    age: 306,
    weight: 39.065952,
    height: 107.75835,
    hair_color: "Pink",
    professions: [
      "Metalworker",
      "Woodcarver",
      "Stonecarver",
      " Tinker",
      "Tailor",
      "Potter",
    ],
    friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
  },
  {
    id: 1,
    name: "Fizkin Voidbuster",
    thumbnail:
      "http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg",
    age: 288,
    weight: 35.279167,
    height: 110.43628,
    hair_color: "Green",
    professions: [
      "Brewer",
      "Medic",
      "Prospector",
      "Gemcutter",
      "Mason",
      "Tailor",
    ],
    friends: [],
  },
];

test("renders the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<GeneralInfo population={population} />, root);

  const { getByText } = render(<GeneralInfo population={population} />);

  getByText("Citizens");
  getByText("Median Age");
  getByText("Median Weight");
  getByText("Avg friends");
  getByText("Common Hair Color");
  getByText("Common Proffesion");
});

// test("Calculates correct average", () => {
//   expect(avg(population.age)).toBe((306 + 288) / 2);
// });
