import { useState } from 'react';

const useForm = (callback) => {

    const [item, setItem] = useState({})

    const handleInputChange = e => {
        e.persist()
        setItem({...item, [e.target.name]: e.target.value });
          };

    const handleSubmit = (e) => {
                e.preventDefault();
                e.target.reset();
                callback(item);
                setItem({});
              };

              return [
                handleInputChange,
                  handleSubmit,
                  item,
              ]
}


export default useForm;