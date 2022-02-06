import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin: 5px 0;
  p {
    margin: 0;
  }
`;

export const Item = ({ item: { id, item, price, quantity, web }, onDelete }) => {
  return (
    <Box>
      <p>
        <b>Item name:</b> {item} (id:{id})
      </p>
      <p>
        <b>Price:</b> {price}
      </p>
      <p>
        <b>Quantity:</b> {quantity}
      </p>
      <p>
        <b>Web:</b> <a href={web}>{web}</a>
      </p>
      <button onClick={() => onDelete()}>Delete this item</button>
    </Box>
  );
};
