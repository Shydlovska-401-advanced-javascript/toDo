 
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Todo.scss';

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
            <button type="button" class="btn btn-link" onClick={() => props.handleDelete(item._id)}>X</button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }


export default TodoList;

