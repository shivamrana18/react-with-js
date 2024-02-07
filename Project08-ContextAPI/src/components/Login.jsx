import React, {useState, useContext} from 'react'
import contextAPI from './../context/contextAPI'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(contextAPI)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'  />
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login