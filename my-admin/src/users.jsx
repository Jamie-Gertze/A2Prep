import { List, 
        Datagrid, 
        TextField, 
        Show, 
        SimpleShowLayout, 
        RichTextField,
        ImageField,
        FileField,
        ReferenceField,
        ImageInput,
        Create,
        SimpleForm,
        TextInput,
        CreateButton, 
        SelectInput, 
        PasswordInput, 
        Link,
        Edit,
        ReferenceInput      
        
    } from 'react-admin';

    

export const usersList = () => (
    <List>
        <Datagrid>
            <ImageField source="avatar" label="Profile Picture" />
            <TextField source="Role" label="Role" />
            <TextField source="name" label="Name" />
            <TextField source="email" label="Email" />

        </Datagrid>
    </List>
);

export const usersShow = () => (
    <Show>
        <SimpleShowLayout>
          
                 {/* <ImageField source="picture" />  */}
            {/* <ImageInput source="avatar" >
                <ImageField source="avatar"/>
            </ImageInput> */}
            <TextField source="Role" label="Role" />
            <TextField source="name" label="Name" />
            <TextField source="email" label="Email" />
            <ReferenceField source="Fav_store" reference="Stores" label="Favorite Store" >
               <TextField source="Store_Name" /> 
            </ReferenceField>
            <ReferenceField source="Fav_drink" reference="Categories" label="Favorite Drink" >
               <TextField source="Type" /> 
            </ReferenceField>

        </SimpleShowLayout>
    </Show>
) ;

export const usersEdit = () => (
    <Edit>
        <SimpleForm>
        <ReferenceInput source="Fav_store" reference="Stores" label="Favorite Store" >
               <SelectInput optionText="Store_Name" /> 
            </ReferenceInput>
            <ReferenceInput source="Fav_drink" reference="Categories" label="Favorite Drink" >
               <SelectInput optionText="Type" /> 
            </ReferenceInput>
        </SimpleForm>
    </Edit>
) ;