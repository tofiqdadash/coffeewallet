import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import sliderData from './sliderData.json';

function Example() {
  return (
    <Carousel className="carousel">
      {sliderData.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default Example;
