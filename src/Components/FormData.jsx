import React from 'react'

export const FormData = ({users},{setUsers}) => {
    console.log(users);
    return (
        <div>
            <h3>Datos</h3>
            <p>{users.firstname} </p>
            <p>{users.lastname}  </p>
            <p>{users.email}</p>
            <p>{users.password}</p>
            <p>{users.confirmpassword}</p>
        </div>
    )
}
