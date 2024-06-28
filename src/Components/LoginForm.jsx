import React from 'react'

const LoginForm = () => {
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        const formdata = new FormData(e.target)
        console.log(formdata.get("Username"))
        console.log(formdata.get("Password"))
    }}>
        <label htmlFor="Username">Username</label>
        <br />
        <input type="text" id="Username" name="Username" onChange={(e)=>{
            console.log(e.target.value)
        }}/>
        <br />
        <label htmlFor="Password">Password</label>
        <br />
        <input type="Password" id="Password" name="Password" onChange={(e)=>{
            console.log(e.target.value)
        }}/>
        <br />
        <button>Login</button>
    </form>
  )
}

export default LoginForm