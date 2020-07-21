import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import App from "./App";
import { getQueriesForEelement } from "@testing-library/dom";

it("renders without crashing", async () => {
  const div = document.createElement("div");
  await ReactDOM.render(<App />, div);
});

// test('renders the correct content', () => {
//     const root = document.createElement('div');
//     ReactDOM.render(<App />, root);

//     const { getByText, getByLabelText } = getQueriesForEelement(root)

//     getByText('');
// })
