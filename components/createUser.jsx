"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const CreateUser = ({disappear}) => {
    const router = useRouter();
    function createUserTransition(){
        disappear()
        setTimeout(() => {
            router.push("/userCreate")
        }, 1000);
    }
      return (
   <button className='userCreateBtn' onClick={createUserTransition}>Create User</button>
  )
}

export default CreateUser;