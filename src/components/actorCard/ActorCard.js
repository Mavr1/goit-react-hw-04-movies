import React from 'react';

const ActorCard = ({ name, character, profile }) => (
  <li className="cast-actorCard">
    <img
      className="cast-actorPhoto"
      src={`https://image.tmdb.org/t/p/w500/${profile}`}
      alt={name}
      width={200}
    />
    <h4 className="cast-actorName">{name}</h4>
    <p className="cast-actorChar">Character: {character}</p>
  </li>
);

export default ActorCard;
