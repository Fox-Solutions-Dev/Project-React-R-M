import React from 'react';
import '../../styles/components/Search.css';

interface SearchProps {
  search: string;
  searchInput: React.RefObject<HTMLInputElement | null>;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ search, searchInput, handleSearch }: SearchProps) => {
  return (
    <div className="Search">
      <input
        className="Search-input"
        type="text"
        value={search}
        ref={searchInput as React.Ref<HTMLInputElement>}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
