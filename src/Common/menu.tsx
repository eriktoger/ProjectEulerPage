import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledUl = styled.ul`
text-align: center;
list-style-type: none;
  `;

const StyledLi = styled.li`
display: inline;
margin: 5px;
font-size: 20px;
  `;

export const Menu = () => {
  return (
    <StyledUl>
      <StyledLi>
        <Link to="/">About</Link>
      </StyledLi >
        <StyledLi >
            <Link to="/admin">Admin</Link>
        </StyledLi >
      <StyledLi>
        <Link to="/problems">Problems</Link>
      </StyledLi>
    </StyledUl>
  );
};
