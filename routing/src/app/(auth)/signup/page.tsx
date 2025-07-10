import React from 'react'

const Signup = () => {

     const handleSubmit = () => {
        
     }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your name'/>
            <input type="email" placeholder='Enter your email'/>
            <input type="password" placeholder='Enter your password'/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Signup