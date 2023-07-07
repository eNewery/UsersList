"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

export const Users = ({users}) => {

const router = useRouter();



  return (
    <div><ul className='userContainer'>
    {users.map(user => (
      <li className='userCard' key={user.id}><div className='userLeft'>
        <div>
        <h5 className='userName'>{user.first_name} {user.last_name}</h5>

        </div>
        <button className='userButton' onClick={() => {
        router.push(`/users/${user.id}`)
      }}>Ver más</button>
        </div>
        <img className='userAvatar' src={user.avatar} alt={user.email} />
        
        </li>
    ))}
    </ul></div>
  )
}
