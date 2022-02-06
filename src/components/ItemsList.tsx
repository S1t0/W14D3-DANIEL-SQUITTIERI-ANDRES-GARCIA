import React from 'react';
import styled from 'styled-components';
import { Item } from './Item';
import { useItems } from '../hooks/useItems';

export const ItemsList = () => {
  const { items, delete_item,clear } = useItems();

  return (
    <div>
      <button type="button" onClick={() => clear()}>
        Clear List
      </button>
      <p>There are 0 items in the list</p>
      {items.map((e) => (
        <Item key={e.id} item={e} onDelete={() => delete_item(e.id)} />
      ))}
    </div>
  );
};
