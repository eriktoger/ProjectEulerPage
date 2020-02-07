import React from "react";
import mario from "../Pictures/mario.png";
const { Img } = require("react-image");
const PageNotFound = () => {
  return (
    <div>
      <h1> Oops! Your page is another castle </h1>
      <img src={mario}></img>
    </div>
  );
};

export default PageNotFound;
