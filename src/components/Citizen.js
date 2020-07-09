import React from "react";

export default function Citizen({ citizen }) {
  return (
    <section className="citizen">
      <div>
        <img
          src={citizen.thumbnail}
          alt="profile-pic"
          style={{ width: "50px" }}
        />
      </div>
      <div>
        <h2>Name</h2>
        <p>{citizen.name}</p>
      </div>
      <div>
        <h2>Age</h2>
        <p>{citizen.age}</p>
      </div>
      <div>
        <h2>Hair</h2>
        <p>{citizen.hair_color}</p>
      </div>
      <div>
        <h2>Height</h2>
        <p>{citizen.height}</p>
      </div>
      <div>
        <h2>Weight</h2>
        <p>{citizen.weight}</p>
      </div>
      <div>
        <h2>Friends</h2>
        {citizen.friends.length > 0 ? (
          citizen.friends.map((friend) => {
            return <p>{friend}</p>;
          })
        ) : (
          <p>No friends</p>
        )}
      </div>
      <div>
        <h2>Professions</h2>
        {citizen.professions.map((profession) => {
          return <p>{profession}</p>;
        })}
      </div>
    </section>
  );
}
