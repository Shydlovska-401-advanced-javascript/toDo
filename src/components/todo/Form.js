import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
        
      //   <Card className= 'Card'>
      //   <form onSubmit={handleSubmit}>
      //      <label>
      //       <span>To Do Item</span>
      //       <input
      //         name="text"
      //         placeholder="Add To Do List Item"
      //         onChange={handleInputChange }
      //       />
      //     </label>
      //     <label>
      //       <span>Difficulty Rating</span>
      //       <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange } />
      //     </label>
      //     <label>
      //       <span>Assigned To</span>
      //       <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange } />
      //     </label> 
      //       <Button type="submit"  size="sm">
      //     Add Item
      //    </Button> 
      //    </form> 
      // </Card>

      <Card>
         <Card.Body>
             <h3>Add Item</h3>
       <Form  onSubmit={handleSubmit}>
     <Form.Group controlId="formBasicEmail">
        <Form.Label>To Do Item</Form.Label>
        <Form.Control type="text" placeholder="Add To Do List Item" onChange={handleInputChange }/>
        <Form.Text className="text-muted">
        </Form.Text>
       </Form.Group>
       </Form> 

       <Form  onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" onSubmit={handleSubmit}>
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" placeholder="Assigned To" onChange={handleInputChange }/>
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
        </Form>
        <Form>
        <Form.Group controlId="formBasicRange">
            <Form.Label>Difficulty Rating</Form.Label>
            <Form.Control type="range" onChange={handleInputChange } />
        </Form.Group>
        <Button variant="primary" type="submit">
        Add Item
        </Button>
        </Form>
        </Card.Body>
      </Card>

    )
}

// render(){
//     return(
//       <>
//       <h3>Add Item</h3>
//        <form onSubmit={handleSubmit}>
//            <label>
//             <span>To Do Item</span>
//              <input
//               name="text"
//               placeholder="Add To Do List Item"
//               onChange={handleInputChange }
//             />
//           </label>
//           <label>
//             <span>Difficulty Rating</span>
//             <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange } />
//           </label>
//           <label>
//             <span>Assigned To</span>
//             <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange } />
//           </label> 
//             <Button type="submit"  size="sm">
//           Add Item
//          </Button> 
//          </form> 
//       </>
//     )
// }

export default TodoForm;