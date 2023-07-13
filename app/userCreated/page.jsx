"use client"
import { useRouter } from 'next/navigation'

import React from 'react'
const userCreated = () => {
    const router = useRouter()
  return (
    <div className='userCreateContainer'>
        <h1>
            User Created Succesfully!
            </h1>
            <button onClick={() => router.push("/userLogin")} className='userCreateLogin'>Go to Login</button>

        </div>
  )
}

export default userCreated