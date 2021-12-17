import React, {useState, useContext} from 'react';
import '../styles/components/Card.css'
import { ThemeContext } from '../Context/ThemeContext';

const Card = ({character, handleClick}) => {
  const [favorite, setFavorite] = useState(false)

  function favoriteStateButton() {
    handleClick(character, favorite)
    setFavorite(!favorite)
  }
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
      {!favorite?(
        <button className="Card--button Card-on" onClick={favoriteStateButton}>
          <i className="far fa-star"></i> Add to Favorite
        </button>
      ):(
        <button className="Card--button Card-off" onClick={favoriteStateButton}>
          <i className="fas fa-star"></i> Favorite
        </button>
      )}
      
      
    </div>
  );
};

export { Card };