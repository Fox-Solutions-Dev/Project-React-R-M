import React from "react";

function FavoriteItem (props) {
  const { name } = props;
  return (
    <li>
      <span>
        C
      </span>
      <p>{name}</p>
      <span>
        X
      </span>
    </li>
  );
}

export { FavoriteItem };