import React from "react";
import "./card.styles.css";
export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}/set=set2&size=180*180`}
    />
    console.log({props.monster.id})<h2>{props.monster.name}</h2>
  </div>
);

// https://robohash.org/:id/:size
