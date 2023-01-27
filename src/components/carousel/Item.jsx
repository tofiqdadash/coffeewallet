import React from "react";

function Item({ item }) {
  return (
    <div>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: "43vh" }}
      />
      <h2 className="carousel-title">{item.title}</h2>
    </div>
  );
}

export default Item;
