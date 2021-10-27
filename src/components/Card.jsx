import React, {useContext} from 'react';
import './Card.css'
import { ThemeContext } from '../Context/ThemeContext';

const Card = ({character}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={"Card-container Card-"+theme}>
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