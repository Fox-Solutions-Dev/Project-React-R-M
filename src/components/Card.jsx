import React from 'react';
import './Card.css'

const Card = ({character}) => {
  return (
    <div className="Card-container">
      <figure>
        <img src={character.image} alt="img-test" />
      </figure>
      <p className="Card--name">{character.name}</p>
      <p className="Card--info"><b>Status:</b> {character.status}</p>
      <p className="Card--info"><b>Specie:</b> {character.species}</p>
      <p className="Card--info"><b>Origin:</b> {character.origin.name}</p>
    </div>
  );
};

export { Card };