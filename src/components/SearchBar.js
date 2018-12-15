import React from "react";

const SearchBar = props => {
  return (
    <input
      className="search-bar"
      type="text"
      name="search"
      placeholder="Start typing to search.."
    />
  );
};

export default SearchBar;
