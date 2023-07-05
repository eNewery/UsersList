
import React from 'react'
async function getUser(id){
 const res = await fetch(`https://reqres.in/api/users/${id}`)
 const data = await res.json()
 return data.data
 
}

async function UsersPage({params}) {
const user = await getUser(params.id)
  return (
    <div>
      <h3>{user.first_name} {user.last_name}</h3>
      <div><img className='roundedAvatar' src={user.avatar} alt="" /></div>
    </div>
  )
}

export default UsersPage