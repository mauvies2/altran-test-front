import React from "react";

export default function Citizen({ citizen }) {
  return (
    <section className="citizen">
      <div className="col img">
        <div
          className="image-cropper"
          style={{ backgroundImage: `url('${citizen.thumbnail}')` }}
        ></div>
      </div>
      <div className="col">
        <h2>Name</h2>
        <p>{citizen.name}</p>
      </div>
      <div className="col">
        <h2>Age</h2>
        <p>{citizen.age}</p>
      </div>
      <div className="col">
        <h2>Hair</h2>
        <p>{citizen.hair_color}</p>
      </div>
      <div className="col">
        <h2>Height</h2>
        <p>{citizen.height}</p>
      </div>
      <div className="col">
        <h2>Weight</h2>
        <p>{citizen.weight}</p>
      </div>
      <div className="col">
        <h2>Friends</h2>
        {citizen.friends.length > 0 ? (
          citizen.friends.map((friend, index) => {
            return <p key={index}>{friend}</p>;
          })
        ) : (
          <p>No friends</p>
        )}
      </div>
      <div className="col">
        <h2>Professions</h2>
        {citizen.professions.map((profession, index) => {
          return <p key={index}>{profession}</p>;
        })}
      </div>
    </section>
  );
}
