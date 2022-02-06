import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid"; // IMPORTANTE

const ItemsContext = React.createContext();

export const ItemsProvider: React.FC<{ children: React.Node }> = ({
  children,
}) => {
  const [items, setItems] = useState([]);
  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const { items, setItems } = useContext(ItemsContext);

  return {
    items,
    add_item: (item) => {},
    clear: () => {},
    delete_item: (id: string) => {},
  };
};
