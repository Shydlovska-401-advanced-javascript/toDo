
import React, { useState, useEffect  } from 'react';
import TodoForm from './Form.js';
import TodoList from './List.js';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './Todo.scss';



function ToDo() {

    const [list, setList] = useState([])
  
    const addItem = (item) => {
      item._id = Math.random();
      item.complete = false;
      setList([...list, item]);
    };
  
    const toggleComplete = id => {
  
      let item = list.filter(i => i._id === id)[0] || {};
  
      if (item._id) {
        item.complete = !item.complete;
        let updatedList = list.map(listItem => listItem._id === item._id ? item : listItem);
        setList(updatedList);
      }
  
    };
  

    useEffect( async() => {

      const response = await axios.get('hhtp://localhost:3000/api/v1/todo')
      setList(response.data.results);

    // useEffect(() => {
    //   let updatedList = [
    //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
    //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
    //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
    //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
    //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    //   ];
  
    //   setList(updatedList);
    }, []);
  
  return (

    <>
    <header>
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link >Home</Nav.Link>
      </Nav>
    </Navbar>
    <br />

        </header>
        <Container>
     <Row>
  <Col >
    <header>
       <Navbar expand="lg" variant="dark" bg="dark">
        <Nav className="mr-auto">
         <Navbar.Brand >ToDo List Manager ({list.filter(item => !item.complete).length})</Navbar.Brand>
        </Nav>
      </Navbar>
        </header>
      <br />
      </Col>
          </Row>

          <Row>
            <Col md={4}>
            <div>
              <TodoForm handleSubmit={addItem} />
            </div>
            </Col>
            <Col md={8}>
             <div>
              <TodoList
                list={list}
                handleComplete={toggleComplete}
                />
             </div>
           </Col>
  
        </Row>
        </Container>
     </>
    );
  }
  
  
  export default ToDo;

