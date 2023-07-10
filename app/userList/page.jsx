import React from 'react'
import { Users } from '@/components/Users'

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
  }
    
async function ServicesPage() {
  const users = await fetchUsers()
  return (
    <div>
      <button>Create User</button>
      <h1 className='userList'>User List</h1>
    <Users users={users}/></div>
  )
}

export default ServicesPage;