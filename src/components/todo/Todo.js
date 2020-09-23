
import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import TodoForm from './Form.js';
import TodoList from './List.js';
// import Swapi from './swapi';
// import Ajax from 'Ajax.js';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './Todo.scss';



function ToDo() {

    const [list, setList] = useState([])
    // const [isLoading, setLoading] = useState(false);
  
  async function addItem(item) {
      item.complete = false;
      console.log(item)
      const response = await axios.post('http://localhost:3001/api/v1/todo', item);
      const results = response.data;
      console.log(results, 'results from post')
      setList([...list, results]);
    }
  
    async function toggleComplete(id){
  
      let item = list.filter(i => i._id === id)[0] || {};
      if (item._id) {
        item.complete = !item.complete;
        await axios.put('http://localhost:3001/api/v1/todo/' + item._id, item);
        let updatedList = list.map(listItem => listItem._id === item._id ? item : listItem);
        setList(updatedList);
      }
  
    };

    async function deleteItem(id){
      
      let item = list.filter(i => i._id === id)[0] || {};
      if (item._id) {
        item.complete = !item.complete;
        await axios.put('http://localhost:3001/api/v1/todo/' + id);
        let updatedList = list.filter(listItem => listItem._id !== item._id );
        setList(updatedList);
      }
    }
  

    useEffect( () => {
      async function fetchData(){
        // setLoading(true);
        const response = await axios.get('http://localhost:3001/api/v1/todo')
        const results = response.data.data;
        console.log('here I am', response.data.data )
        setList(results);
        // setLoading(true);
        
      }
      fetchData();

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
         {/* (isLoading && <p>Loading ...</p>) */}
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
                handleDelete={deleteItem}
                />
             </div>
           </Col>
  
        </Row>
        </Container>
     </>
    );
  }
  
  
  export default ToDo;

