import React from 'react';
import { ItemsProvider } from '../hooks/useItems';
import { AddItemForm } from './forms/AddItemForm';
import { ItemsList } from './ItemsList';

export const App = () => {
  return (
    <ItemsProvider>
      <h2>CORE Wishlist</h2>
      <AddItemForm />
      <ItemsList />
    </ItemsProvider>
  );
};
