import { List, Datagrid, TextField, ShowButton, Show, SimpleShowLayout, ReferenceField, ImageField  } from "react-admin";
import { Stack, Box , Typography} from '@mui/material';


export const BrandyList = () => (
  <List>
    <Datagrid>
      <TextField source="Name"  />
      <ShowButton />
    </Datagrid>
  </List>
);


export const BrandyShow = () => (
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
