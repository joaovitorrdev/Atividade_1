import React, { useState } from "react";
import Todo from '../components/Todo';
import Form from '../components/Form';
import { Container } from '@mui/system';
import { List } from '@mui/material';

export default function Home(){
 const [todos, setTodos] = useState ([]);

    const tudoAdd = (todo) => {
    setTodos([... todos, todo]);
      
    };
const deleteTodo = (id) =>{
   var filtered = todos.filter((todo) => todo.id !== id);
   setTodos(filtered)
};


    return (
       
        <Container maxWidth = "xs"  style= {{marginTop: "1em" }}>
        <Form tudoAdd = { tudoAdd} />
        <List  sx={{ marginTop: "1em"}}> 
        {todos.map((todo,key) => (
        <div key={key}style={{ marginTop: "1em" }}>
        <Todo todo={todo} deleteTodo={deleteTodo}/>
        </div>
        ))} 
        </List>
        </Container>  
        
    );
}