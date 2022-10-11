import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Paper } from "@mui/material";
import BackspaceIcon from '@mui/icons-material/Backspace';

export default function Todo({todo, deleteTodo}) {
  const [checked, setChecked] = React.useState([0]);

  return (
    <Paper style={{  padding: "1em"  }}>
    <ListItem

    secondaryAction={
      <IconButton edge="end" aria-label="comments" onClick={() => deleteTodo(todo.id)}>
        <BackspaceIcon />
      </IconButton>
      
    }
    
    disablePadding
  >
    <ListItemButton role={undefined} dense>
      <ListItemIcon>
        <Checkbox  edge="start" tabIndex={-1}  />
      </ListItemIcon>
      <ListItemText primary={todo.text}/>
    </ListItemButton>
  </ListItem>
  </Paper>
 
  );
}
