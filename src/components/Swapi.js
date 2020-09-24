import React , { useState, useEffect  } from 'react';
import axios from 'axios';




export default function Swapi(){
    const [list, setList] = useState([])

    useEffect( () => {
        async function fetchData(){
          const response = await axios.get('http://localhost:3001/api/v1/todo')
          const results = response.data.results;
          console.log('here I am',results,response.data )
          setList(results);
          
        }
        fetchData()
  
      
  
     
      }, []);

      return (
          <>
           <ul>
               {list.map(listItem => listItem._id === item._id ? item : listItem)}
           </ul>
          </>
      )
}