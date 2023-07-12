"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter()
  return (
    <div className='userCreateContainer'>
    <div>
    <h1>Log-in</h1>
    <p>You do not have an account? <button onClick={() => router.push("/userCreate")} className='userCreateLogin'>Register</button></p>
    </div>
    <div className="createUserForm">
    <input type="text" placeholder='Username'/>
    <input type="password" placeholder='Password'/>
    </div>
    <button className='userCreateBtn'>Login</button>
</div>
  )
}

export default page