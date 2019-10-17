import React, { useState } from "react";
import PropTypes from "prop-types";

function Search({ searchUser, clearSearch, showClear }) {
  const [text, setText] = useState({ text: "" });

  const onSubmit = e => {
    e.preventDefault();
    searchUser(e.target.text.value);
    setText({ text: "" });
  };

  const onChange = e => {
    setText({ [e.target.name]: e.target.value });
  };

  const onClear = e => {
    clearSearch("clear it!");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text.text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={onClear}>
          Clear!
        </button>
      )}
    </div>
  );
}

Search.propTypes = {
  searchUser: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};

export default Search;
