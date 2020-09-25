
import React, { useState, useEffect, useCallback  } from 'react';
// import React from 'react';
import axios from 'axios';
import TodoForm from './Form.js';
import TodoList from './List.js';
import useAjax from './Ajax.js';
// import Auth from '../auth/auth.js'
// import Login from '../auth/login.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './Todo.scss';


// 'http://localhost:3001/api/v1/todo';
const API = 'http://localhost:3001';

function ToDo() {


    const { request, response } = useAjax();
    const [list, setList ] = useState([]);
    



    const addItem = async(item) =>{
      const options ={
        method: 'post',
        url: `${API}/api/v1/todo`,
        data: item,

      };
      request(options);
    }
  
  const toggleComplete = async (id) =>{
    let item = list.filter(i => i._id === id)[0] || {};
      if (item._id) {
        const options ={
          method: 'put',
          url: `${API}/api/v1/todo/${id}`,
          data:{complete :!item.complete},
        };
        request(options);
      }
  }

    const deleteItem = async (id) =>{
      const options ={
        method: 'delete',
        url: `${API}/api/v1/todo/${id}`,

      };
      request(options);
    }

    const getList = useCallback( async () => {
      const options ={
        method: 'get',
        url: `${API}/api/v1/todo`,
      }
      request(options);
    }, [request])


    useEffect( () => {
      if(response.data){
        response.data && setList(response.data)
      }else{
        getList();
      }
    }, [response, getList, setList]);


    useEffect(() => {
      let incomplete = list.filter(item => !item.complete).length;
      document.title = `To DO List: ${incomplete}`;
    })

  
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
        {/* <Login/> */}
          {/* <Auth> */}
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
              {/* <Auth> */}
            <div>
              <TodoForm handleSubmit={addItem} />
            </div>
            {/* </Auth> */}
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
        {/* </Auth> */}
        
     </>
    );
  }
  
  
  export default ToDo;

