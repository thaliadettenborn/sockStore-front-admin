/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  ShowButton,
} from "react-admin";

export default function ClientsList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField label="Nome" source="name" />
        <TextField label="CPF" source="cpf" />
        <EmailField label="E-mail" source="email" />
        <TextField label="CEP" source="address.cep" />
        <TextField label="Rua" source="address.street" />
        <NumberField label="Número" source="address.number" />
        <TextField label="Complemento" source="address.complement" />
        <TextField label="Bairro" source="address.neighborhood" />
        <TextField label="Cidade" source="address.city" />
        <TextField label="Estado" source="address.state" />
        <ShowButton />
      </Datagrid>
    </List>
  );
}
