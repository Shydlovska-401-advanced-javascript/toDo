 
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './Todo.scss';

// import { LoginContext } from '../auth/context.js'

function TodoList(props) {
    return (
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item action variant={item.complete? "danger":"success" }
            key={item._id}
          >   
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
            <Button variant="link" onClick={() => props.handleDelete(item._id)}>x</Button>
            {/* <button type="button" className="btn btn-link" onClick={() => props.handleDelete(item._id)}>X</button> */}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }


export default TodoList;

