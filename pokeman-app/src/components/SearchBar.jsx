import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Pokémon..." onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
