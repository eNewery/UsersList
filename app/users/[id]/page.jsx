import React from 'react'


async function getUser(id){

 const res = await fetch(`https://reqres.in/api/users/${id}`)
 const data = await res.json()
 return data.data
 
}
export default async function UsersPage({params}) {
  const user = await getUser(params.id)


  return (
    <div className='userDetailContainer'>
      <div className='userDetail'>
      <div>
<h3 className='userId'>User ID: {user.id}</h3>
      <h2 className='userName'>{user.first_name} {user.last_name}</h2>
      </div>
      <div><img className='userAvatar' src={user.avatar} alt="" /></div>
   <h3>Contact: {user.email}</h3>
      </div>
    </div>
  )
}
export const metadata = {
  title: "User Detail"
}
