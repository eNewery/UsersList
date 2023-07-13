"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const userCreate = () => {
    const router = useRouter()
    function createUser(){
      const firstName = document.querySelector(".firstName")
      const lastName = document.querySelector(".lastName")
      const email = document.querySelector(".email")
      const username = document.querySelector(".username")
      const password = document.querySelector(".password")
      const repeatPassword = document.querySelector(".repeatPassword")
const user = {
  firstNameOb: firstName.value,
  lastNameOb: lastName.value,
  emailOb: email.value,
  usernameOb: username.value,
  passwordOb: password.value,
  repeatPasswordOb: repeatPassword.value
}
console.log(user)
router.push("/userCreated")
    }
  return (
    <div className='userCreateContainer'>
        <div>
        <h1>Create User</h1>
        <p>Already have an account? <button onClick={() => router.push("/userLogin")} className='userCreateLogin'>Log-in</button></p>
        </div>
        <form className="createUserForm">
            <div>
        <input className='firstName' required type="text" placeholder='First Name'/>
        <input className='lastName' required type="text" placeholder='Last Name'/>
            </div>
        <input className='email' required type="text" placeholder='E-Mail'/>
        <input className='username' required type="text" placeholder='Username'/>
        <input className='password' required type="password" placeholder='Password'/>
        <input className='repeatPassword' required type="password" placeholder='Repeat Password'/>
        </form>
        <button onClick={createUser} className='userCreateBtn'>Create User</button>
    </div>
  )
}

export default userCreate;