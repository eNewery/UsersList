import React from 'react'
import Link from 'next/link'

function navigation() {
  return (
    <ul className='navigationBar'>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/userList">Create User</Link>
      </li>
    </ul>
  )
}

export default navigation