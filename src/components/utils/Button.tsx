import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.7em 2em;
  border: 0.1em solid #d3d2d2;
  background-color: transparent;
  border-radius: 0.4em;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  text-shadow: 0 0 2px #c0bd94;
  font-size: 1rem;
  color: #d3d2d2;
  text-align: center;
  transition: all 0.2s;
  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
`;
// a.button1:hover{
//  color:#000000;
//  background-color:#FFFFFF;
// }

export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
