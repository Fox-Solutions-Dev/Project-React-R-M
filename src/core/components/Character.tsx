'use client';

import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { Card, FavoriteList, FavoriteItem, NotFound } from './index';
import Search from './Search';
import {
  useCharacters,
  Character as CharacterType,
} from '../hooks/useCharacter';
import { Box, Grid, Stack } from '@mui/material';

interface FavoritesState {
  favorites: CharacterType[];
}

type FavoriteAction =
  | { type: 'ADD_FAVORITE'; payload: CharacterType }
  | { type: 'REMOVE_FAVORITE'; payload: CharacterType };

const initialState: FavoritesState = {
  favorites: [],
};

const API = 'https://rickandmortyapi.com/api/character/';

const favoriteReducer = (
  state: FavoritesState,
  action: FavoriteAction
): FavoritesState => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
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

  const handleSearch = useCallback(
    (_e: React.ChangeEvent<HTMLInputElement>) => {
      if (searchInput.current) {
        setSearch(searchInput.current.value);
      }
    },
    []
  );

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      ),
    [characters, search]
  );

  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        p: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid size={12} container spacing={2}>
        <FavoriteList>
          {favorites.favorites.map((favorite) => (
            <FavoriteItem key={favorite.id} fav={favorite} />
          ))}
        </FavoriteList>
      </Grid>
      <Grid size={12} container spacing={2}>
        <Search
          search={search}
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
      </Grid>
      <Grid size={12} container spacing={2}>
        {filteredUsers.length === 0 ? (
          <NotFound />
        ) : (
          filteredUsers.map((character) => (
            <Box key={'div' + character.id}>
              <Card
                character={character}
                key={character.id}
                handleClick={handleClick}
              />
            </Box>
          ))
        )}
      </Grid>
    </Stack>
  );
};

export default Character;
