import React, { useState } from "react";

export default function Filter(props) {
  const initialQuery = {
    name: "",
    minAge: "",
    maxAge: "",
    minWeight: "",
    maxWeight: "",
    minHeight: "",
    maxHeight: "",
    hairColor: "",
    friends: "",
    profession: "",
  };
  const [query, setQuery] = useState(initialQuery);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  };
  return (
    <section>
      <form
        className="filter-form"
        onSubmit={(e) => {
          e.preventDefault();
          // On submit the query is triggered
          props.filter(query);
          setQuery(initialQuery);
        }}
      >
        <div>
          <input
            name="name"
            value={query.name}
            type="text"
            placeholder="Enter name"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            name="minAge"
            value={query.minAge}
            type="number"
            placeholder="Enter min age"
            onChange={handleInputChange}
          ></input>
          <input
            name="maxAge"
            value={query.maxAge}
            type="text"
            placeholder="Enter max age"
            onChange={handleInputChange}
            min="0"
          ></input>
        </div>
        <div>
          <input
            name="minWeight"
            value={query.minWeight}
            type="number"
            placeholder="Enter min weight "
            onChange={handleInputChange}
            min="0"
          ></input>
          <input
            name="maxWeight"
            value={query.maxWeight}
            type="number"
            placeholder="Enter max weight"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            name="minHeight"
            value={query.minHeight}
            type="number"
            placeholder="Enter min height"
            onChange={handleInputChange}
          ></input>
          <input
            name="maxHeight"
            value={query.maxHeight}
            type="number"
            placeholder="Enter max height"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            name="hairColor"
            value={query.hairColor}
            type="text"
            placeholder="Enter hair color"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            name="friends"
            value={query.friends}
            type="number"
            placeholder="Enter number of friends"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            name="profession"
            value={query.profession}
            type="text"
            placeholder="Enter profession"
            onChange={handleInputChange}
          ></input>
        </div>
        <button>Search</button>
      </form>
    </section>
  );
}
