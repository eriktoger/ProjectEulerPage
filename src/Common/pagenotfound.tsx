import React from "react";
import mario from "./mario.png";
const PageNotFound = () => {
  return (
    <div>
      <h1> Oops! Your page is another castle </h1>
      <img src={mario} alt={"mario!"}></img>
    </div>
  );
};

export default PageNotFound;
