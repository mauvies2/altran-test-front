import React from "react";
import ReactDOM from "react-dom";
import Intro from "./Intro";
import { render } from "@testing-library/react";
import { getQueriesForEelement } from "@testing-library/dom";
import { BrowserRouter as Router } from "react-router-dom";

test("renders the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Intro population={4} />
    </Router>,
    root
  );

  const { getByText } = render(<Intro />);
  getByText("WELCOME TO BRASTLEWARK");
  getByText("Click here to explore more details");
  getByText("Explore");
});
