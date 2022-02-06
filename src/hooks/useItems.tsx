import React, { useState, useContext } from 'react';
import { updateTypePredicateNodeWithModifier } from 'typescript';
import { v4 as uuidv4 } from 'uuid'; // IMPORTANTE
import { validate_url } from '../lib/validate_url';

const ItemsContext = React.createContext();

export const ItemsProvider: React.FC<{ children: React.Node }> = ({ children }) => {
  const [items, setItems] = useState([]);
  return <ItemsContext.Provider value={{ items, setItems }}>{children}</ItemsContext.Provider>;
};

export const useItems = () => {
  const { items, setItems } = useContext(ItemsContext);
  return {
    items,
    add_item: (item) => {
      const id = uuidv4();
      const newItem = { ...item, id };
      const newArray = [...items, newItem];
      setItems(newArray);
      console.log('From context', newArray);
    },
    clear: () => {
      setItems([]);
    },
    delete_item: (id: string) => {
      console.log('DELETE ITEM:', id);
    },
  };
};
