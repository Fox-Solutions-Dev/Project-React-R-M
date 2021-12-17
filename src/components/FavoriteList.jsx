import React from "react";
import '../styles/components/FavoriteList.css'

function FavoriteList(props) {
  return (
    <section>
      <ul className='favoriteList'>
        {props.children}
      </ul>
    </section>
  );
}

export { FavoriteList };