import { List, 
        Datagrid, 
        TextField, 
        Show, 
        SimpleShowLayout, 
        RichTextField,
        ImageField,
        FileField,
        ReferenceField,
        ImageInput
        
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

        </SimpleShowLayout>
    </Show>
)