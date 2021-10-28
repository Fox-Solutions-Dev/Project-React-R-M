import {useState, useEffect, useReducer, useMemo, useRef, useCallback } from 'react';
import { Card } from './Card';
import './Character.css'
import Search from './Search';

const initialState = {
  favorites: []
}

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

  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data=> setCharacters(data.results));
  }, []);
  
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
      {favorites.favorites.map(favorite =>(
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}

      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

      {filteredUsers.map(character => (
        <div key={'div'+character.id}>
          <Card character={character} key={character.id}/>
          <button 
            type="button" 
            onClick={()=>handleClick(character)}
          >
            Agregar a favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export { Character };