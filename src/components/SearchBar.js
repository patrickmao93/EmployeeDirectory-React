import React from "react";

class SearchBar extends React.Component {
  //state initialization
  state = { term: "" };

  /**
   * Makes user input controlled
   * @param {event object} event
   */
  onInputChange = event => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onInputChange(term);
  };

  render() {
    return (
      <input
        className="search-bar"
        type="text"
        name="search"
        value={this.state.term}
        placeholder="Start typing to search.."
        onChange={this.onInputChange}
      />
    );
  }
}

export default SearchBar;
