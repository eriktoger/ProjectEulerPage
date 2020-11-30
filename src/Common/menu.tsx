import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <ul style={{ left: "auto", position: "absolute" }}>
      <li>
        <Link to="/"> Home</Link>
      </li>
        <li>
            <Link to="/admin"> Admin</Link>
        </li>
      <li>
        <Link to="/Problems/PE1"> Problem 1</Link>
      </li>
      <li>
        <Link to="/Problems/PE2"> Problem 2</Link>
      </li>
      <li>
        <Link to="/Problems/PE3"> Problem 3</Link>
      </li>
    </ul>
  );
};
