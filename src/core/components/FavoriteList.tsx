import React from 'react';
import { Grid } from '@mui/material';

interface FavoriteListProps {
  children: React.ReactNode;
}

const FavoriteList = ({ children }: FavoriteListProps) => {
  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      {children}
    </Grid>
  );
};

export default FavoriteList;
