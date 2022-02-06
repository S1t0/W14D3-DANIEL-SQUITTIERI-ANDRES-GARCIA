import React from 'react';
import { ItemsProvider } from '../hooks/useItems';
import { AddItemForm } from './forms/AddItemForm';
import { ItemsList } from './ItemsList';
import styled from 'styled-components';

const Styledh2 = styled.h2`
  text-align: center;
  color: #c0bd94;
  text-shadow: 0 0 2px #c0bd94;
  font-size: 3rem;
`;

const StyledBody = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const App = () => {
  return (
    <ItemsProvider>
      <div style={{ display: 'flex' }}></div> <Styledh2>CORE Wishlist</Styledh2>
      <StyledBody>
        <AddItemForm />
        <ItemsList />
      </StyledBody>
    </ItemsProvider>
  );
};
