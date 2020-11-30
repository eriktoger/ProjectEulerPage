import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 20px auto;
  padding: 15px 0px;
  text-align: center;
  border-style: solid;
  border-radius: 25px;
  font-size: 25px;
  max-width: 400px;
  `;

export const Header = () => {
    return <StyledDiv className="mainHeader"> Homage to Project Euler</StyledDiv>;
};
