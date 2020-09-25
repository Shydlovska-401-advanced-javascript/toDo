import React from 'react';
import '../src/components/todo/Todo.scss';
// import LoginProvider from './components/auth/context'

import ToDo from './components/todo/Todo.js';


function  App(){
    return (
      <>
      {/* <LoginProvider> */}
        <ToDo />
        {/* </LoginProvider> */}
      </>
    );

}

export default App;