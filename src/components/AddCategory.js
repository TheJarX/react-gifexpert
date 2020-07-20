import React, { useState } from "react";
import PropTypes from "prop-types";

function AddCategory({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 3) return;
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

AddCategory.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddCategory;
