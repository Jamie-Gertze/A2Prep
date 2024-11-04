import { List, Datagrid, TextField, ShowButton, Show, SimpleShowLayout, ReferenceManyField } from "react-admin";

export const BrandyList = () => (
  <List>
    <Datagrid>
      <TextField source="name"  />
      <ShowButton />
    </Datagrid>
  </List>
);

export const BrandyShow = () => (
    <Show>
      <SimpleShowLayout>
        <TextField source="name" />
        <ReferenceManyField label="Prices" reference="stores" target="beer_id">
          <Datagrid>
            <TextField source="store" />
            <TextField source="price" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );