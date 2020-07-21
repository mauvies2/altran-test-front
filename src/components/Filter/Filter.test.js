import React from "react";
import Filter from "./Filter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// test("renders with default props", () => {
//   const { getByTestId } = render(<Filter />);
//   const input = getByTestId("name");

//   expect(input).toHaveAttribute(("type", "text"));
// });

test("renders enabled buttons", () => {
  const { getByTestId } = render(<Filter />);
  const searchButton = getByTestId("search-button");
  const backButton = getByTestId("back-button");

  expect(searchButton).toBeEnabled();
  expect(backButton).toBeEnabled();
});
