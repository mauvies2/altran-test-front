import React, { useState } from "react";

export default function Filter(props) {
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

  const handleInputChange = (e) => {
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
              name="name"
              value={query.name}
              type="text"
              placeholder="Name"
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <input
              name="hair_color"
              value={query.hair_color}
              type="text"
              placeholder="Enter hair color"
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <input
              name="age"
              value={query.age}
              type="number"
              placeholder="Age"
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            <input
              name="friends"
              value={query.friends}
              type="number"
              placeholder="# Of friends"
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <input
              name="profession"
              value={query.profession}
              type="text"
              placeholder="Profession"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div className="filter-bottom-btn">
          <button style={backBtn}>Search</button>
          <button style={backBtn} onClick={() => setFilter(!filter)}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
