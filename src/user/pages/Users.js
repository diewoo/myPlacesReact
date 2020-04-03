import React from 'react'
import UserList from '../components/UsersList'
const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Diego',
      image:
        'https://kinsta.com/es/wp-content/uploads/sites/8/2017/04/cambiar-wordpress-url-1.png',
      places: 3
    }
  ]

  return <UserList items={USERS} />
}

export default Users
