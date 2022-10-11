
import { TextField, Button, Paper } from "@mui/material";
import React, { useState }  from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Form({ tudoAdd }){
   const [text, setText] = useState(null);
   const [id, setId] = useState(0);


   const todoCreate = (text) => {
        const todoObj = {text: text, id: id};
        setId(id + 1);
        tudoAdd(todoObj);
        document.getElementById("outlined-basic").value = null;
   };
   
    return(
        
    <Paper style={{ Padding:"1em" }}>
    <div style={{display: "flex", justifyContent:"center"}}>
    <TextField id="outlined-basic" label="Tarefas" variant="outlined"  onChange={(e) => setText(e.target.value)} fullWidth />
    <Button variant="text" onClick={() => todoCreate (text) }>
   <ArrowForwardIosIcon></ArrowForwardIosIcon>
    </Button>
    
    </div>
    </Paper>

        
    );
}