import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExperApp() {
  const [categories, setCategories] = useState(["One punch man"]);

  const handleAdd = (category) => {
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h2>Gif Expert</h2>
      <hr />
      <AddCategory onSubmit={handleAdd} />
      <ol>
        {categories.map((cat, idx) => (
          <GifGrid category={cat} key={`${cat}-${idx}`} />
        ))}
      </ol>
    </>
  );
}

export default GifExperApp;
