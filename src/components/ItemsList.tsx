import React from 'react';
import styled from 'styled-components';
import { Item } from './Item';
import { useItems } from '../hooks/useItems';
import { Button } from './utils/Button';

const StyledP = styled.div`
  padding 0 30px;
  display: inline;
  font-size: 1.5rem;
  font-family: 'Helvetica Neue';
  color: white;
  text-shadow: 0px 0px 2px black;
`;

const StyleTitle = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemsList = () => {
  const { items, delete_item, clear } = useItems();

  return (
    <div>
      <StyleTitle>
        <StyledP>
          There are <strong>{items.length}</strong> items in the list
        </StyledP>
        <Button onClick={() => clear()}>Clear List</Button>
      </StyleTitle>
      {items.map((e) => (
        <Item key={e.id} item={e} onDelete={() => delete_item(e.id)} />
      ))}
    </div>
  );
};
