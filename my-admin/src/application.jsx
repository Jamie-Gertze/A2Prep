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
                    <SelectInput source="Gender" choices={[
                    { id: 'Male', name: 'Male' },
                    { id: 'Female', name: 'Female' },
                    ]} />
                    <TextInput source="Name" />
                    <TextInput source="Middle_Name" />
                    <TextInput source="Surname" />
                </Stack>
                <Stack direction="row" gap={1}>
                    <TextInput source="Email" />
                    <TextInput source="Physical_address" />
                    
                </Stack>
                <Stack direction="row" gap={1}>
                    <DateInput source="Date_of_birth" />
                    <NumberInput source='Identity_num'/>
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
                <TextField label=""source="Name"  />
                <TextField label="" source="Surname" />
                <TextField source="Email" />
                <TextField source='' />
           </TabbedShowLayout.Tab>
       </TabbedShowLayout>
    </SimpleShowLayout>
    </Show>
);