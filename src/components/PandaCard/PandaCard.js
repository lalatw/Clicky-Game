import React from "react";
import "./PandaCard.css";

const PandaCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} 
      onClick={() => props.onClickfun(props.id)}
      />
    </div>
  </div>
);

export default PandaCard;
