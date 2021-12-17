import React from 'react';
import '../styles/components/Search.css'

const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div className="Search">
      <input className="Search-input" type="text" value={search} ref={searchInput} onChange={handleSearch}/>
    </div>
  );
};

export default Search;