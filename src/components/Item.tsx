import React from 'react';
import styled from 'styled-components';
import { Button } from './utils/Button';

const Box = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px;
  margin: 5px 0;
  display: flex;
  font-size: 1.1rem;
  background-color: rgba(255, 255, 255, 0.05);

  .princpal {
    padding: 0 10px 0;
  }

  .data {
    display: flex;
  }

  p {
    margin: 2px 10px 2px;
    color: white;
  }
  b {
    font: oblique bold 90% cursive;
  }
  a {
    font: sans-serif;
  }
  a:visited {
    color: white;
  }
`;

export const Item = ({ item: { id, item, price, quantity, web }, onDelete }) => {
  return (
    <Box>
      <div className="princpal">
        <p>
          <b>Item name:</b> {item} (id:{id})
        </p>
        <div className="data">
          <p>
            <b>Price:</b> {price}
          </p>
          <p>
            <b>Quantity:</b> {quantity}
          </p>
        </div>
        <p>
          <b>Web:</b> <a href={web}>{web.length < 33 ? web : `${web.substring(0, 30)}...`}</a>
        </p>
      </div>
      <Button onClick={() => onDelete()}>Delete</Button>
    </Box>
  );
};
