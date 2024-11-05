import { Create,
    SimpleForm,
    TextInput,
    NumberInput,
    List, 
    CreateButton,
    SaveButton,
    TabbedForm, Datagrid,
    TextField, DateField,
    DateInput, SelectField, 
    NumberField,
    SelectInput, SelectArrayInput,
    Show,
    SimpleShowLayout,
    TopToolbar,
    PrevNextButtons,
    TabbedShowLayout,
    ReferenceField
} from 'react-admin';
import { Box, Stack, Typography } from '@mui/material';

export const ApplicationList = () => ( //storing the records for user
    <List empty={<Empty />}>
        <Datagrid>
            <TextField source="title" />
            <TextField source="name" />
            <TextField source="surname" />
        </Datagrid>
    </List>
);

export const ApplicationCreate = () => (
    <Create>
        <TabbedForm>
            <TabbedForm.Tab label="Application Form">
                <Stack direction ="row" gap={1}>
                    <SelectInput source="title" choices={[
                        { id: 'Mr', name: 'Mr' },
                        { id: 'Miss', name: 'Miss' },
                        { id: 'Mrs', name: 'Mrs' },
                        { id: 'Dr', name: 'Dr' },
                    ]} />
                    <SelectInput source="gender" choices={[
                    { id: 'Male', name: 'Male' },
                    { id: 'Female', name: 'Female' },
                    ]} />
                    <TextInput source="name" />
                    <TextInput source="middle_name" />
                    <TextInput source="surname" />
                </Stack>
                <Stack direction="row" gap={1}>
                    <TextInput source="email" />
                    <TextInput source="physical_address" />
                    
                </Stack>
                <Stack direction="row" gap={1}>
                    <DateInput source="date_of_birth" />
                    <NumberInput source='identity_num'/>
                </Stack>
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);


const Empty = () => ( //for display when there's nothing 
    <Box textAlign="center" m={1}>
        <Typography variant="h4" paragraph>
            You have no application available
        </Typography>
        <Typography variant="body1">
            Would you like to create one?
        </Typography>
        <CreateButton reference="applications" label="Create" />
    </Box>
);


export const ApplicantsShow = () => (
    <Show
        actions={
            <TopToolbar>
                <PrevNextButtons linkType="show"/>
            </TopToolbar>
        }
    >
    <SimpleShowLayout>
      <TabbedShowLayout>
          <TabbedShowLayout.Tab label="Applicaton Staus">
                <DateField label="Publication date" source="created_at" />
                <TextField source="application_status" />
                <TextField label="Student Details"source="id" />
                <TextField label=""source="name"  />
                <TextField label="" source="surname" />
                <TextField source="email" />
                <TextField source='' />
           </TabbedShowLayout.Tab>
       </TabbedShowLayout>
    </SimpleShowLayout>
    </Show>
);