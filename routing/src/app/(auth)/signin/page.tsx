import React from 'react'

const Signin = () => {

     const handleSubmit = () => {
        
     }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter your email'/>
            <input type="password" placeholder='Enter your password'/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Signin