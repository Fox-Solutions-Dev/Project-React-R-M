import React, {useState, useReducer, useMemo, useRef, useCallback } from 'react';
import { Card } from './Card';
import { FavoriteList } from './FavoriteList';
import { FavoriteItem } from './FavoriteItem';
import './Character.css'
import Search from './Search';
import { useCharacters } from '../hooks/useCharacter';

const initialState = {
  favorites: []
}

const API = 'https://rickandmortyapi.com/api/character/'

const favoriteReducer = (state, action) =>{
  switch (action.type) {
    case 'ADD_FAVORITE':
      return{
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case 'REMOVE_FAVORITE':
      const newFav = state.favorites.filter((item)=>{
        return item.id !== action.payload.id;
      })
      return { favorites: newFav }
    default:
      return state
  }
}

const Character = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const characters = useCharacters(API);  
  const handleClick = (character, favorite) => {
    if(!favorite){
      dispatch({ type: 'ADD_FAVORITE', payload: character })
    }else{
      dispatch({ type: 'REMOVE_FAVORITE', payload: character })
    }
    
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
      <FavoriteList>
      {favorites.favorites.map(favorite => (<FavoriteItem key={favorite.id} name={favorite.name} />))}
      </FavoriteList>
      <div className="Character-Search">
        <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
      </div>
      <div className="Character-container">
        {filteredUsers.map(character => (
          <div key={'div'+character.id}>
            <Card character={character} key={character.id} handleClick={handleClick}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Character };