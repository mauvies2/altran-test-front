import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

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
