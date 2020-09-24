// import React, { useState } from 'react';
import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import useForm from './formHook.js'

function TodoForm(props){


  const [handleInputChange, handleSubmit] = useForm(submitForm);

  function submitForm(task){
    console.log(task, 'task')
    props.handleSubmit(task)
  }

    return (

      <Card>
         <Card.Body>
             <h3>Add Item</h3>
       <Form  onSubmit={handleSubmit}>
     <Form.Group controlId="formBasicEmail">
        <Form.Label>To Do Item</Form.Label>
        <Form.Control name="text" placeholder="Add To Do List Item" onChange={handleInputChange }/>
        <Form.Text className="text-muted">
        </Form.Text>
       </Form.Group>
     
        <Form.Group controlId="formBasicEmail" >
            <Form.Label>Assigned To</Form.Label>
            <Form.Control name="assigned to" placeholder="Assigned To" onChange={handleInputChange }/>
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicRange">
            <Form.Label>Difficulty Rating</Form.Label>
            <Form.Control type="range" name="difficulty" onChange={handleInputChange } />
        </Form.Group>
        <Button variant="primary" type="submit">
        Add Item
        </Button>
        </Form>
        </Card.Body>
      </Card>

    )
}


export default TodoForm;


