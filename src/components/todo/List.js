 
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Todo.scss';

function TodoList(props) {
    return (
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item action variant={item.complete? "danger":"success" }
            // className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
              {/* <ListGroup.Item onClick={() => props.handleComplete(item._id)}  action variant="danger"></ListGroup.Item> */}
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }


export default TodoList;

