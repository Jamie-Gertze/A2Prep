import { List, 
    Datagrid, 
    TextField, 
    Show, 
    SimpleShowLayout, 
    RichTextField,
    ImageField,
    FileField,
    
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
        <FileField source="Store"  src='checkers_VxgZnmj6ln.jpg'/>    
        <TextField source="Store_Name" label="Name" />
        <TextField source="Adress" label="Adress" />
        <TextField source="Hours" label="Open Hours" />

    </SimpleShowLayout>
</Show>
)