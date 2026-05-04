'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Character } from '../hooks/useCharacter';

interface CardProps {
  character: Character;
  handleClick: (character: Character, favorite: boolean) => void;
}

const CardRM = ({ character, handleClick }: CardProps) => {
  const [favorite, setFavorite] = useState(false);

  function favoriteStateButton() {
    handleClick(character, favorite);
    setFavorite(!favorite);
  }

  return (
    <Card>
      <CardMedia component="img" image={character.image} alt={character.name} />
      <CardContent>
        <Typography variant="subtitle1">{character.name}</Typography>
        <Typography variant="body2">
          <b>Status:</b> {character.status}
        </Typography>
        <Typography variant="body2">
          <b>Specie:</b> {character.species}
        </Typography>
        <Typography variant="body2">
          <b>Origin:</b> {character.origin.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={favoriteStateButton}>
          {!favorite ? 'Add to Favorite' : 'Remove from Favorite'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardRM;
