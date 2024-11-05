import { List, 
    Datagrid, 
    TextField, 
    Show, 
    SimpleShowLayout, 
    RichTextField,
    ImageField,
    FileField,
    Edit,
    TextInput,
    SimpleForm
    
} from 'react-admin';

export const StoresList = () => (
<List>
    <Datagrid>
        <TextField source="Store_Name" label="Name" />
        <TextField source="Adress" label="Adress" />
        <TextField source="Hours" label="Open Hours" />

    </Datagrid>
</List>
);

export const StoresShow = () => (
<Show>
    <SimpleShowLayout>
        <TextField source="Store_Name" label="Name" />
        <TextField source="Adress" label="Adress" />
        <TextField source="Hours" label="Open Hours" />

    </SimpleShowLayout>
</Show>
)

export const StoresEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Store_Name" label="Name" />
            <TextInput source="Adress" label="Adress" />
            <TextInput source="Hours" label="Open Hours" />
        </SimpleForm>
    </Edit>
    )