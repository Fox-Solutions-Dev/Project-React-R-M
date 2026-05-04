'use client';

import { Character } from '../hooks/useCharacter';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';

interface FavoriteItemProps {
  fav: Character;
}

const FavoriteItem = ({ fav }: FavoriteItemProps) => {
  return (
    <Card>
      <CardHeader title={fav.name} />
      <CardMedia component="img" image={fav.image} alt={fav.name} />
      <CardContent>
        <Typography variant="body2">
          <b>Status:</b> {fav.species}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FavoriteItem;
