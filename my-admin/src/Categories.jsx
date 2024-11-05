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
import { Link } from "react-router-dom";



export const CategoriesList = () => (
    <List>
      <Datagrid>
        <TextField source="Type" label="Categories" />
        <Link to="/Beer">
          <button>View Beers</button>
        </Link>
        <Link to="/Brandy">
          <button>View Brandy</button>
        </Link>
      </Datagrid>
    </List>
  );

