import React, {useState, useContext} from 'react';
import './Card.css'
import { ThemeContext } from '../Context/ThemeContext';

const Card = ({character, handleClick}) => {
  const [favorite, setFavorite] = useState(true)

  function favoriteStateButton() {
    if (favorite) {
      handleClick(character)
      setFavorite(false)
    } else {
      console.log('elimina')
    }
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
      {favorite?(
        <button className="Card--button Card-on" onClick={favoriteStateButton}>
          <i className="far fa-star"></i> Add to Favotire
        </button>
      ):(
        <button className="Card--button Card-off" onClick={favoriteStateButton}>
          <i className="fas fa-star"></i> Favotire
        </button>
      )}
      
      
    </div>
  );
};

export { Card };