import React from 'react';

const Search = ({ value, onInputChange, onSearchMovies }) => {
  return (
    <>
      <div className="movies-search">
        <input
          className="movies-searchInput"
          type="text"
          value={value}
          onChange={onInputChange}
          placeholder="type Avatar"
        />
        <button onClick={onSearchMovies}>Search</button>
      </div>
    </>
  );
};

export default Search;
