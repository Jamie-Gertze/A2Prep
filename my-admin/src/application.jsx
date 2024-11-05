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
                    <TextInput source="high_school_name" />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <SelectArrayInput source="degree_choice" choices={[
                        { id: 'goqhpbxstka85zn', name: 'Bachelors in Advanced Piloting and Logistics' },
                        { id: '339m5q5wfftlc6o', name: 'Masters in Leadership and Conflict Psychology' },
                        { id: 'vbpsiicduay6pb1', name: 'Bachelors in Self-Discovery and Cultural Heritage' },
                        { id: 'yi69e7bvmxpfnmh', name: 'PhD in Strategic Warfare and Sith Philosophy' },
                        { id: 'rjonpbn96nmscbd', name: 'Masters in Intergalactic Exploration and Leadership' },
                        { id: 'ik11m39hwwrq17t', name: 'PhD in Ancient Wisdom and Ethical Philosophy' },
                    ]} />
                    <SelectInput source="academic_residence" choices={[
                        { id: 'Endor Hall', name: 'Endor Hall' },
                        { id: 'Tatooine Village(Males)', name: 'Tatooine Village(Males)' },
                        { id: 'Alderaan Dorms', name: 'Alderaan Dorms' },
                        { id: 'Naboo Mano(Females)', name: 'Naboo Mano(Females)' },
                    ]} />
                    
                </Stack>
            </TabbedForm.Tab>
            
            <TabbedForm.Tab label="Academic Record">
                <Stack direction="row" spacing={4}>
                    <Box>
                        <SelectInput source="Subject1" choices={[
                                { id: 'English Home Language', name: 'English Home Language' },
                                { id: 'Afrikaans FAL', name: 'Afrikaans FAL' },
                                { id: 'Mathematics', name: 'Mathematics' },
                                { id: 'Physical Science', name: 'Physical Science' },
                                { id: 'Life Orientation', name: 'Life Orientation' },
                                { id: 'Life Sciences & Biology', name: 'Life Sciences & Biology' },
                                { id: 'Geography', name: 'Geography' },
                                { id: 'Accounting', name: 'Accounting' },
                                { id: 'Jawa Trade Language FAL', name: 'Jawa Trade Language FAL' },
                                { id: 'EGD', name: 'EGD' },
                            ]} />
                            <SelectInput source="Subject2" choices={[
                                { id: 'English Home Language', name: 'English Home Language' },
                                { id: 'Afrikaans FAL', name: 'Afrikaans FAL' },
                                { id: 'Mathematics', name: 'Mathematics' },
                                { id: 'Physical Science', name: 'Physical Science' },
                                { id: 'Life Orientation', name: 'Life Orientation' },
                                { id: 'Life Sciences & Biology', name: 'Life Sciences & Biology' },
                                { id: 'Geography', name: 'Geography' },
                                { id: 'Accounting', name: 'Accounting' },
                                { id: 'Jawa Trade Language FAL', name: 'Jawa Trade Language FAL' },
                                { id: 'EGD', name: 'EGD' },
                            ]} />
                            <SelectInput source="Subject3" choices={[
                                { id: 'English Home Language', name: 'English Home Language' },
                                { id: 'Afrikaans FAL', name: 'Afrikaans FAL' },
                                { id: 'Mathematics', name: 'Mathematics' },
                                { id: 'Physical Science', name: 'Physical Science' },
                                { id: 'Life Orientation', name: 'Life Orientation' },
                                { id: 'Life Sciences & Biology', name: 'Life Sciences & Biology' },
                                { id: 'Geography', name: 'Geography' },
                                { id: 'Accounting', name: 'Accounting' },
                                { id: 'Jawa Trade Language FAL', name: 'Jawa Trade Language FAL' },
                                { id: 'EGD', name: 'EGD' },
                            ]} />
                            <SelectInput source="Subject4" choices={[
                                { id: 'English Home Language', name: 'English Home Language' },
                                { id: 'Afrikaans FAL', name: 'Afrikaans FAL' },
                                { id: 'Mathematics', name: 'Mathematics' },
                                { id: 'Physical Science', name: 'Physical Science' },
                                { id: 'Life Orientation', name: 'Life Orientation' },
                                { id: 'Life Sciences & Biology', name: 'Life Sciences & Biology' },
                                { id: 'Geography', name: 'Geography' },
                                { id: 'Accounting', name: 'Accounting' },
                                { id: 'Jawa Trade Language FAL', name: 'Jawa Trade Language FAL' },
                                { id: 'EGD', name: 'EGD' },
                            ]} />
                            <SelectInput source="Subject5" choices={[
                                { id: 'English Home Language', name: 'English Home Language' },
                                { id: 'Afrikaans FAL', name: 'Afrikaans FAL' },
                                { id: 'Mathematics', name: 'Mathematics' },
                                { id: 'Physical Science', name: 'Physical Science' },
                                { id: 'Life Orientation', name: 'Life Orientation' },
                                { id: 'Life Sciences & Biology', name: 'Life Sciences & Biology' },
                                { id: 'Geography', name: 'Geography' },
                                { id: 'Accounting', name: 'Accounting' },
                                { id: 'Jawa Trade Language FAL', name: 'Jawa Trade Language FAL' },
                                { id: 'EGD', name: 'EGD' },
                            ]} />
                            <SelectInput source="Subject6" choices={[
                                { id: 'English Home Language', name: 'English Home Language' },
                                { id: 'Afrikaans FAL', name: 'Afrikaans FAL' },
                                { id: 'Mathematics', name: 'Mathematics' },
                                { id: 'Physical Science', name: 'Physical Science' },
                                { id: 'Life Orientation', name: 'Life Orientation' },
                                { id: 'Life Sciences & Biology', name: 'Life Sciences & Biology' },
                                { id: 'Geography', name: 'Geography' },
                                { id: 'Accounting', name: 'Accounting' },
                                { id: 'Jawa Trade Language FAL', name: 'Jawa Trade Language FAL' },
                                { id: 'EGD', name: 'EGD' },
                            ]} />
                            <SelectInput source="Subject7" choices={[
                                { id: 'English Home Language', name: 'English Home Language' },
                                { id: 'Afrikaans FAL', name: 'Afrikaans FAL' },
                                { id: 'Mathematics', name: 'Mathematics' },
                                { id: 'Physical Science', name: 'Physical Science' },
                                { id: 'Life Orientation', name: 'Life Orientation' },
                                { id: 'Life Sciences & Biology', name: 'Life Sciences & Biology' },
                                { id: 'Geography', name: 'Geography' },
                                { id: 'Accounting', name: 'Accounting' },
                                { id: 'Jawa Trade Language FAL', name: 'Jawa Trade Language FAL' },
                                { id: 'EGD', name: 'EGD' },
                            ]} />
                    </Box>
                    <Box>
                        <NumberInput source='Raw_score1' />
                        <NumberInput source='Raw_score2' />
                        <NumberInput source='Raw_score3' />
                        <NumberInput source='Raw_score4' />
                        <NumberInput source='Raw_score5' />
                        <NumberInput source='Raw_score6' />
                        <NumberInput source='Raw_score7' />
                    </Box>
                    <Box>
                        <NumberInput source='Level1' />
                        <NumberInput source='Level2' />
                        <NumberInput source='Level3' />
                        <NumberInput source='Level4' />
                        <NumberInput source='Level5' />
                        <NumberInput source='Level6' />
                        <NumberInput source='Level7' />
                    </Box>
                </Stack>
            </TabbedForm.Tab>

            <TabbedForm.Tab label="Extra Curricular Activity">
                <TextInput source="activity1" />
                <TextInput multiline source="description1" />
                <TextInput source="activity2" />
                <TextInput multiline source="description2" />
                <TextInput source="activity3" />
                <TextInput multiline source="description3" />
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
                <TextField source="degree_choice" />
                <DateField label="Publication date" source="created_at" />
                <TextField source="application_status" />
                <TextField label="Student Details"source="id" />
                <TextField label=""source="name"  />
                <TextField label="" source="surname" />
                <TextField source="email" />
                <TextField source='' />
                <TextField label = "Prospective Modules" source="" />
                <ReferenceField source="Module_Name" reference="Registered_Modules" label="" />

           </TabbedShowLayout.Tab>
       </TabbedShowLayout>
    </SimpleShowLayout>
    </Show>
);