import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Forms';

function TodoForm(props){


    const [item, setItem] = useState({})

    const handleInputChange = e => {
        setItem({[e.target.name]: e.target.value });
          };

    const  handleSubmit = (e) => {
                e.preventDefault();
                e.target.reset();
                props.handleSubmit(item);
                setItem({item});
              };
    return (
        
        <Card className= 'Card'>
        <form onSubmit={handleSubmit}>
           <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange }
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange } />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange } />
          </label> 
            <Button type="submit"  size="sm">
          Add Item
         </Button> 
         </form> 
      </Card>

    )
}

export default TodoForm;