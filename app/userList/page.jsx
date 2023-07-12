"use client"
import React from 'react'
import { Users } from '@/components/Users'
import CreateUser from '@/components/createUser'

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
  }
    
async function ServicesPage() {
  const users = await fetchUsers()
  function dissapearTransition(){
  const userList = document.querySelector(".userListContainer")
  userList.classList.add("dissapear")
  }

  return (
    <div className='userListContainer'>
     <CreateUser disappear={dissapearTransition}/>
      <div>
      <h1 className='userList'>Recent Users Created</h1>
    <Users users={users}/></div>
      </div>
  )
}

export default ServicesPage;