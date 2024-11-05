import { List, useRecordContext } from 'react-admin';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'; // Import Button from Material-UI
import { Box, Typography } from '@mui/material';

const categories = [
  { type: "Beer", path: "/Beer" },
  { type: "Brandy", path: "/Brandy" },
  { type: "Vodka", path: "/Vodka" },
  { type: "Wine", path: "/Wine" },
];

export const CategoriesList = () => (
  <List>
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <Typography variant="h4" gutterBottom>
        Categories
      </Typography>
      {categories.map((category) => (
        <Box key={category.type} mb={2}>
          <Link to={category.path} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              View {category.type}
            </Button>
          </Link>
        </Box>
      ))}
    </Box>
  </List>
);