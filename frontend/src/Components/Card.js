import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ game }) => {
  let navigate = useNavigate();

  return (
    <div
      className={`card mt-2 mb-4`}
      onClick={() => {
        navigate(`/`);
      }}
    >
      <img
        className="card-img-top img-fluid"
        style={{ height: "300px" }}
        src={game.image}
        loading="lazy"
        alt={`game`}
      />
      <div className="card-body">
        <p className="game-name">{game.name}</p>
        <p className="game-rating">
          Rating = <span className="fw-bold">{game.rating}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
