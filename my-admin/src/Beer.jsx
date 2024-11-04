import { List, Datagrid, TextField, ShowButton, Show, SimpleShowLayout, ReferenceField, ImageField, Create, TextInput, SimpleForm, ReferenceInput, SelectInput, AutocompleteInput  } from "react-admin";
import { Stack, Box , Typography} from '@mui/material';

export const BeerCreate = () => (
    <Create>
        <SimpleForm>
            {/* <ImageInput source="avatar" label="Profile Picture" /> */}
            <TextInput source="Name" label="Name" />
            <TextInput source="Volume" label="Volume" />
            <ReferenceInput source="Store_1" reference="Stores" label="Name" filter={{disabled : false}} 
            sort={{field: "Name"}}
            >
            </ReferenceInput>
            <TextInput source="Store_Price3" label="Store 3 Price" />
            </SimpleForm>
    </Create>
);

export const BeerList = () => (
  <List>
    <Datagrid>
      <TextField source="Name" />
      <ShowButton />
    </Datagrid>
  </List>
);


export const BeerShow = () => (
    <Show>
        <SimpleShowLayout>
            <ImageField source="image">
            </ImageField>
            <TextField source="Name" label="Name" />
            <TextField source="Volume" label="Volume" />

<Box padding={2} display="flex" justifyContent="space-between">
<Typography variant="subtitle1" style={{ width: '70%' }}>Store</Typography>
<Typography variant="subtitle1" style={{ width: '165%' }}>Price</Typography>
</Box>

    <Box padding={2} display="flex" justifyContent="space-between">
    <ReferenceField source="Store_1" reference="Stores" label="Store 1" >   
                <TextField source="Name" style={{ width: '70%' }} />
    </ReferenceField>
    <TextField source="Store_Price1" style={{ width: '70%' }} />
</Box>

<Box padding={2} display="flex" justifyContent="space-between">
    <ReferenceField source="Store_2" reference="Stores" label="Store 2" >   
                <TextField source="Name" style={{ width: '70%' }}  />
    </ReferenceField>    
    <TextField source="Store_Price_2" style={{ width: '70%' }} />
</Box>
</SimpleShowLayout>
</Show>
)

