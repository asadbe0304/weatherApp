import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
// import jwa from 'jsonwebtoken';
import "./style.scss"
interface LoginProps { }

const login: React.FC<LoginProps> = () => {
  const [name, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  
  let userLocal = localStorage.setItem("user", name);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/register)', { name, password });
      const token = response.data.token;
      // const decodedToken = jwa.decode(token);
      // console.log(decodedToken);
      if (name == "" || password == "") {
        history("/")
      } else {
        history('/home');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <TextField
            label="User Name" variant="filled"
            type="text"
            id="name"
            className='text-input'
            value={name}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Password" variant="filled"
            className='text-input'
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button variant='contained' style={{ width: "100px" }} type="submit">Login</Button>
      </form>
    </div>
  );
};

export default login;