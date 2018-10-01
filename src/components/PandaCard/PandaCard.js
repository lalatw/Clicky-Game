import React from "react";
import "./PandaCard.css";

const PandaCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default PandaCard;
