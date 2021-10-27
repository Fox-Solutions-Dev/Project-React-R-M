import {useState, useEffect} from 'react';
import { Card } from './Card';
import './Character.css'

const Character = ({darkMode}) => {

  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data=> setCharacters(data.results));
  }, []);
  
  return (
    <div className="Characters">
      {characters.map(character => (
        <Card character={character} darkMode={darkMode}/>
      ))}
    </div>
  );
};

export { Character };