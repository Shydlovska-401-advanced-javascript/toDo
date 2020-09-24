import { useEffect, useState } from 'react';
import axios from 'axios'

const useAjax = (url, method, body) => {
    const [list, setList] = useState([]);


    // if(method === 'GET'){

  useEffect(() => {

    async function fetchData() {
      const response = await axios.get(url);
      const results = response.data.data;
      setList(results);
     
    }

    fetchData();

  }, [url]);
    
  // }

  return {
    list,
   
  }
}



export default useAjax;