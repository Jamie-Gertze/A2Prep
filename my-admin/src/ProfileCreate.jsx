import { Create, SimpleForm, TextInput, List, CreateButton, Datagrid, TextField, SelectInput, PasswordInput, Link } from 'react-admin';
import { Box, Typography } from '@mui/material';



const ProfileCreate = () => (
    <Create>
       <SimpleForm>
        <TextInput source="email" label="Email" />
        <TextInput source="name" label="Name" />
        <TextInput source="username" label="Username" />
        <TextInput source="passwordConfirm" type="password" label="Password" />
        <TextInput source="Role" label="Role" />


       </SimpleForm>
    </Create>
);

// Empty state for when there are no users
const Empty = () => (
    <Box textAlign="center" m={1}>
        <Typography variant="h4" paragraph>
            You do not have a profile
        </Typography>
        <Typography variant="body1">
            Would you like to create one?
        </Typography>
        <Link resource="users" label="Create Profile" reference= "ProfileCreate" /> 
    </Box>
);

export default ProfileCreate;