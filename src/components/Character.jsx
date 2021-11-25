import React, {useState, useReducer, useMemo, useRef, useCallback } from 'react';
import { Card } from './Card';
import './Character.css'
import Search from './Search';
import { useCharacters } from '../hooks/useCharacter';
import { NotFound } from './NotFound';

const initialState = {
  favorites: []
}

const API = 'https://rickandmortyapi.com/api/character/'

const favoriteReducer = (state, action) =>{
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return{
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state
  }
}

const Character = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const characters = useCharacters(API);  
  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }
  
  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])

  // const filteredUsers = characters.filter((user)=>{
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // })
  
  const filteredUsers = useMemo(() => 
    characters.filter((user)=>{
      return user.name.toLowerCase().includes(search.toLowerCase());
    }), [characters, search]
  )
  
  return (
    <div className="Characters">
      <div className="Characters-FavList">
        {favorites.favorites.map(favorite =>(
          <li key={favorite.id}>
            {favorite.name}
          </li>
        ))}
      </div>
      <div className="Character-Search">
        <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
      </div>
      <div className="Character-container">
        {filteredUsers.length === 0 ? 
        <NotFound/> : 
        filteredUsers.map(character => (
          <div key={'div'+character.id}>
            <Card character={character} key={character.id} handleClick={handleClick}/>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export { Character };