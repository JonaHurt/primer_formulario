

import React, { useState } from 'react'
import './App.css';
import { Form } from './Components/Form';
import { FormData } from './Components/FormData';



function App() {
  
  const datos = [{
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
  }
  ]
  const [users, setUsers] = useState(datos)
  return (
    <>
    <h3>Formulario</h3>    
    <Form users={users} setUsers={setUsers}/>
    <FormData users={users}/>
    </>
  );
}

export default App;
