import React from "react";
import '../styles/components/FavoriteList.css';

interface FavoriteListProps {
  children: React.ReactNode;
}

function FavoriteList({ children }: FavoriteListProps) {
  return (
    <section>
      <ul className="favoriteList">
        {children}
      </ul>
    </section>
  );
}

export { FavoriteList };
