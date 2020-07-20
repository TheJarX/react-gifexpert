import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
// import getGifs from "../helpers/GetGifs";

function GifGrid({ category }) {
  const { data: images, done } = useFetchGifs(category);

  return (
    <div className="card-grid-container">
      <h3 className="animate__animated animate__fadeInDown">{category}</h3>
      <div className="card-grid">
        {!done && (
          <p className="animate__animated animate__flash">Loading...</p>
        )}

        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
}

export default GifGrid;
// +55 94 9102-3534 Ana
