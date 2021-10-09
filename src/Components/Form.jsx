import React, { useState } from 'react'

export const Form = (props) => {

    const{users,setUsers} = props;
    const handleChange = (e) =>{
        
        setUsers({...users, [e.target.name] : e.target.value })
      
    }
    const createUser = (e) =>{
        e.preventDefault();
    }
    
    return (
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input name="firstname" type="text" onChange={ handleChange } />
            </div>
            <div>
                <label>Lastname: </label> 
                <input name="lastname" type="text" onChange={ handleChange } />
            </div>
            <div>
                <label>Email: </label> 
                <input name="email" type="email" onChange={ handleChange } />
            </div>
           
            <div>
                <label>Password: </label>
                <input name="password" type="password" onChange={ handleChange } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input name="confirmpassword" type="password" onChange={ handleChange } />
            </div>
            <input type="submit" value="Create User" />
        </form>
       
        </div>

       
    )
}
