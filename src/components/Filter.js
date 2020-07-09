import React from "react";

export default function Filter() {
  return (
    <section>
      <form className="filter-form">
        <div>
          <input type="text" placeholder="Enter name"></input>
        </div>
        <div>
          <input type="text" placeholder="Enter min age"></input>
          <input type="text" placeholder="Enter max age"></input>
        </div>
        <div>
          <input type="text" placeholder="Enter min weight"></input>
          <input type="text" placeholder="Enter max weight"></input>
        </div>
        <div>
          <input type="text" placeholder="Enter min height"></input>
          <input type="text" placeholder="Enter max height"></input>
        </div>
        <div>
          <input type="text" placeholder="Enter hair color"></input>
        </div>
        <div>
          <input type="text" placeholder="Enter number of friends"></input>
        </div>
        <div>
          <input type="text" placeholder="Enter profession"></input>
        </div>
        <button>Search</button>
      </form>
    </section>
  );
}
