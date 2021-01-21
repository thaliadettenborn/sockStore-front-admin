/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceArrayInput,
  AutocompleteArrayInput,
} from "react-admin";

import {
  validateName,
  validateDescription,
  validateSize,
  validateStock,
  validatePrice,
} from "./validate";

export default function ProductsCreate(props) {
  const transform = (data) => ({
    ...data,
    price: parseFloat(data.price).toFixed(2),
  });

  return (
    <Create {...props} transform={transform}>
      <SimpleForm
        initialValues={{ stock: 0 }}
        submitOnEnter
        redirect="show"
        warnWhenUnsavedChanges
      >
        <TextInput
          label="Nome do produto"
          source="name"
          validate={validateName}
        />
        <TextInput
          label="Preço do produto (R$)"
          source="price"
          validate={validatePrice}
        />
        <SelectInput
          label="Tamanho"
          source="size"
          choices={[
            { id: "U", name: "Único" },
            { id: "P", name: "Pequeno" },
            { id: "M", name: "Médio" },
            { id: "G", name: "Grande" },
          ]}
          validate={validateSize}
        />
        <TextInput
          label="Descrição do produto"
          source="description"
          validate={validateDescription}
        />
        <NumberInput
          label="Quantidade em estoque"
          source="stock"
          validate={validateStock}
        />
        <ReferenceArrayInput
          label="Categorias"
          reference="categories"
          source="categoriesId"
        >
          <AutocompleteArrayInput />
        </ReferenceArrayInput>
        <ArrayInput source="photos">
          <SimpleFormIterator>
            <TextInput label="Link da foto" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}
