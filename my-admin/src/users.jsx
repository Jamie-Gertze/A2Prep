import { List, 
        Datagrid, 
        TextField, 
        Show, 
        SimpleShowLayout, 
        RichTextField,
        ImageField,
        FileField
        
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
            <ImageField source="avatar" label="Profile Picture" />
            <TextField source="Role" label="Role" />
            <TextField source="name" label="Name" />
            <TextField source="email" label="Email" />

        </SimpleShowLayout>
    </Show>
)