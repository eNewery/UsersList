import React from 'react'

const userCreate = () => {
  return (
    <div className='userCreateContainer'>
        <div>
        <h1>Create User</h1>
        <p>¿Already have an account? <span className='userCreateLogin'>Log-in</span></p>
        </div>
        <div className="createUserForm">
        <input type="text" placeholder='First Name'/><input type="text" placeholder='Last Name'/><input type="text" placeholder='E-Mail'/>
        </div>
        <button className='userCreateBtn'>Create User</button>
    </div>
  )
}

export default userCreate;