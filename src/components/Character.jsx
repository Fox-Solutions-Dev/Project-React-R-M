import {useState, useEffect, useReducer, useMemo } from 'react';
import { Card } from './Card';
import './Character.css'

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
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data=> setCharacters(data.results));
  }, []);
  
  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

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
        <li>
          {favorite.name}
        </li>
      ))}

      <div className="Search">
        <input type="text" value={search} onChange={handleSearch}/>
      </div>

      {filteredUsers.map(character => (
        <div key={character.id}>
          <Card character={character}/>
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