import React from 'react'

const User = async ({params}: {params: {users: string}}) => {
    const { users } = await params;
  return (
    <div>
        <h1>Information About {users}</h1>
        <h3>hello im {users}</h3>
    </div>
  )
}

export default User