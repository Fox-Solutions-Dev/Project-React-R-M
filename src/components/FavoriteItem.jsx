import React from "react";
import "./FavoriteItem.css"

function FavoriteItem (props) {
  const { fav } = props;
  console.log(fav);
  return (
    <div className='favoriteItem'>
      <div className= 'favoriteContainer'>
      <p>{fav.name}</p>
        <figure>
            <img src={fav.image} alt="character" width="80"/>
            <p>{fav.species}</p>
        </figure>
      </div>
    </div>
  );
}

export { FavoriteItem };