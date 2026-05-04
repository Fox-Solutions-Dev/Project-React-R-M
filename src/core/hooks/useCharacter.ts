import { useState, useEffect } from 'react';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: {
    name: string;
  };
}

const useCharacters = (url: string): Character[] => {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [url]);
  return characters;
};

export { useCharacters };
