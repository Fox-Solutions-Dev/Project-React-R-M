'use client';

import React, { useContext } from "react";
import "../styles/components/FavoriteItem.css";
import { ThemeContext } from '../Context/ThemeContext';
import { Character } from '../hooks/useCharacter';

interface FavoriteItemProps {
  fav: Character;
}

function FavoriteItem({ fav }: FavoriteItemProps) {
  const { theme } = useContext(ThemeContext);
  console.log(fav);
  return (
    <div className="favoriteItem">
      <div className="favoriteContainer">
        <p className={"text-" + theme}>{fav.name}</p>
        <figure>
          <img src={fav.image} alt="character" width={80} />
          <p className={"text-" + theme}>{fav.species}</p>
        </figure>
      </div>
    </div>
  );
}

export { FavoriteItem };
