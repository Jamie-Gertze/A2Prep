import { List, Datagrid, TextField, ShowButton, Show, SimpleShowLayout, ReferenceField } from "react-admin";

export const BeerList = () => (
  <List>
    <Datagrid>
      <TextField source="Name" />
      <ShowButton />
    </Datagrid>
  </List>
);

// export const BeerShow = () => (
//     <Show>
//       <SimpleShowLayout>
//         <TextField source="Name"  />
//         <ReferenceManyField label="Store_price1" reference="stores" >
//           <Datagrid>
//             <TextField source="store" />
//             <TextField source="price" />
//           </Datagrid>
//         </ReferenceManyField>
//       </SimpleShowLayout>
//     </Show>
//   );

export const BeerShow = () => (
    <Show>
        <SimpleShowLayout>
            {/* <FileField source="Store"  src='checkers_VxgZnmj6ln.jpg'/>     */}
            <TextField source="Name" label="Name" />
            {/* <TextField source="Adress" label="Adress" /> */}
            <ReferenceField source="Store_1" reference="Stores" label="Store 1" >   
                <TextField source="Name" />
            </ReferenceField>
            <TextField source="Store_Price1" label="Store 1 Price" />
            <TextField source="Store_2" label="Store 2" />
            <TextField source="Store_Price_2" label="Store 2 Price" />

    
        </SimpleShowLayout>
    </Show>
    )