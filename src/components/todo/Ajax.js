import { useState, useEffect } from 'react';
import axios from 'axios';
const useAjax = () => {
  const [options, request] = useState({});
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function ajax() {
      if (!options) { return; }
      setIsLoading(true);
      try {
        const res = await axios(options);
        setResponse(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    ajax();
  }, [options]);
  return { request, response, error, isLoading };
};
export default useAjax;


// import { useEffect, useState } from 'react';
// import axios from 'axios'

// const useAjax = (url, method, body) => {
//     const [list, setList] = useState([]);


//     // if(method === 'GET'){

//   useEffect(() => {

//     async function fetchData() {
//       const response = await axios.get(url);
//       const results = response.data.data;
//       setList(results);
     
//     }

//     fetchData();

//   }, [url]);
    
       

//   return {
//     list,
//     setList
   
//   }
// }



// export default useAjax;