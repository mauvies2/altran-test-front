import React, { useState } from "react";

const Filter = (props) => {
  const initialQuery = {
    name: "",
    age: "",
    hair_color: "",
    friends: "",
    profession: "",
  };

  // State to control filter query
  const [query, setQuery] = useState(initialQuery);

  // State to control styles
  const [filter, setFilter] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.filter(query);
    setQuery(initialQuery);
  };

  const filterStyle = {
    display: filter ? "flex" : "none",
  };
  const filterBtn = {
    display: filter ? "none" : "block",
  };
  const backBtn = {
    display: filter ? "block" : "none",
  };

  return (
    <div className="filter-container">
      <button style={filterBtn} onClick={() => setFilter(!filter)}>
        Filter
      </button>
      <form className="filter-form" onSubmit={onSubmit}>
        <div className="filter" style={filterStyle}>
          <div>
            <input
              data-testid="name"
              name="name"
              value={query.name}
              type="text"
              placeholder="Name"
              onChange={handleInput}
            ></input>
          </div>
          <div>
            <input
              name="hair_color"
              value={query.hair_color}
              type="text"
              placeholder="Enter hair color"
              onChange={handleInput}
            ></input>
          </div>
          <div>
            <input
              name="age"
              value={query.age}
              type="number"
              placeholder="Age"
              onChange={handleInput}
            ></input>
          </div>

          <div>
            <input
              name="friends"
              value={query.friends}
              type="number"
              placeholder="# Of friends"
              onChange={handleInput}
            ></input>
          </div>
          <div>
            <input
              name="profession"
              value={query.profession}
              type="text"
              placeholder="Profession"
              onChange={handleInput}
            ></input>
          </div>
        </div>
        <div className="filter-bottom-btn">
          <button style={backBtn} data-testid="search-button">
            Search
          </button>
          <button
            style={backBtn}
            data-testid="back-button"
            onClick={() => setFilter(!filter)}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};
export default Filter;
