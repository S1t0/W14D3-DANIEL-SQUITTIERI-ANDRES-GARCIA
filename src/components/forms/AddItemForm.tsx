import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useItems } from '../../hooks/useItems';
import { Button } from '../utils/Button';

const GridForm = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  justify-content: 'center';
  color: white;
  text-shadow: 0px 0px 2px black;
  & > div {
    padding: 10px 5px;
    p {
      margin: 0 0 5px 5px;
      font-size: 1.2rem;
    }
    input {
      background-color: #d3d2d2;
      width: 100%;
      padding: 5px;
    }
  }
`;

const ErrorMessageText = styled.div`
  margin: 5px;
  color: red;
  font-size: 0.9rem;
`;

const ErrorMessage = ({ field, state }) => {
  if (state.errors[field]) {
    return <ErrorMessageText>{state.errors[field].message}</ErrorMessageText>;
  } else {
    return <ErrorMessageText>{''}</ErrorMessageText>;
  }
};

export const AddItemForm = () => {
  const { add_item } = useItems();

  const { register, handleSubmit, formState, reset } = useForm();

  const submit = handleSubmit(async (data) => {
    add_item(data);
  });

  return (
    <form
      onSubmit={handleSubmit(submit)}
      style={{
        marginTop: 20,
        display: 'inline-block',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <GridForm>
        <div>
          <p>Nombre:</p>
          <input
            {...register('item', { required: 'Indica el nombre del artículo' })}
            placeholder="Nombre"
          />
          <ErrorMessage state={formState} field="item" />
        </div>
        <div>
          <p>Precio:</p>
          <input
            {...register('price', { required: 'Indica el precio del artículo' })}
            placeholder="Precio"
          />
          <ErrorMessage state={formState} field="price" />
        </div>
        <div>
          <p>Cantidad:</p>
          <input
            {...register('quantity', { required: 'Indica la cantidad del artículo' })}
            placeholder="Cantidad"
          />
          <ErrorMessage state={formState} field="quantity" />
        </div>
        <div>
          <p>Sitio web:</p>
          <input
            {...register('web', {
              validate: {
                checkUrl: async (url) =>
                  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
                    url
                  ) || 'Url no válida',
              },
            })}
            placeholder="Sitio web"
          />
          <ErrorMessage state={formState} field="web" />
        </div>
      </GridForm>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={submit}>Guardar</Button>
      </div>
    </form>
  );
};
