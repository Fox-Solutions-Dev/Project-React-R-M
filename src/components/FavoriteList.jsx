import React from "react";

function FavoriteList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { FavoriteList };