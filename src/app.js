import React from 'react';
import '../src/components/todo/Todo.scss';
import LoginProvider from './components/auth/context';
import SettingsProvider from './components/context/Content.js'

import ToDo from './components/todo/Todo.js';


function  App(){
    return (
   <SettingsProvider>
      <LoginProvider>
        <ToDo />
        </LoginProvider>
    </SettingsProvider>
    );

}

export default App;