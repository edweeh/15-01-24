
import React, { useState } from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import './Login.css'
import { TextField } from '@mui/material';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError(true);
    } else {
      setError(false);
      // Perform login logic or navigate to another page
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    <div>


      <div className="topnav">
      <PetsIcon />
      <a href="login.html" >PETSTORE</a>
      </div>


      <div className='login-bg'>
      
      </div>


      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handleLogin}>
            <h1>Login</h1>
            
            <TextField id='outlined' label='Username' variant='outlined'  value={username} onChange={handleUsernameChange} required /><br></br>
            <br></br><TextField  type='password' id='outlined-password'  label='Password' variant='outlined'  value={password} onChange={handlePasswordChange} required/>
            <br></br>
            <div className='button'><br></br>
            <button type="submit">LOGIN</button></div>
            or
            <br></br><button type="submit">RESET</button>
            
          </form>
          {error && <p>All fields must be entered</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;

