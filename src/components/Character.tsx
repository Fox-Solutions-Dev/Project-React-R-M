'use client';

import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import { Card } from './Card';
import { FavoriteList } from './FavoriteList';
import { FavoriteItem } from './FavoriteItem';
import '../styles/components/Character.css';
import Search from './Search';
import { useCharacters, Character as CharacterType } from '../hooks/useCharacter';
import { NotFound } from './NotFound';

interface FavoritesState {
  favorites: CharacterType[];
}

type FavoriteAction =
  | { type: 'ADD_FAVORITE'; payload: CharacterType }
  | { type: 'REMOVE_FAVORITE'; payload: CharacterType };

const initialState: FavoritesState = {
  favorites: []
};

const API = 'https://rickandmortyapi.com/api/character/';

const favoriteReducer = (state: FavoritesState, action: FavoriteAction): FavoritesState => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case 'REMOVE_FAVORITE':
      return {
        favorites: state.favorites.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

const Character = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef<HTMLInputElement>(null);

  const characters = useCharacters(API);

  const handleClick = (character: CharacterType, favorite: boolean) => {
    if (!favorite) {
      dispatch({ type: 'ADD_FAVORITE', payload: character });
    } else {
      dispatch({ type: 'REMOVE_FAVORITE', payload: character });
    }
  };

  const handleSearch = useCallback((_e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchInput.current) {
      setSearch(searchInput.current.value);
    }
  }, []);

  const filteredUsers = useMemo(
    () => characters.filter(user => user.name.toLowerCase().includes(search.toLowerCase())),
    [characters, search]
  );

  return (
    <div className="Characters">
      <FavoriteList>
        {favorites.favorites.map(favorite => (
          <FavoriteItem key={favorite.id} fav={favorite} />
        ))}
      </FavoriteList>
      <div className="Character-Search">
        <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
      </div>
      <div className="Character-container">
        {filteredUsers.length === 0 ? (
          <NotFound />
        ) : (
          filteredUsers.map(character => (
            <div key={'div' + character.id}>
              <Card character={character} key={character.id} handleClick={handleClick} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export { Character };
