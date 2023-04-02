import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import {TextField, Button} from "@mui/material"
import { Navigate, useNavigate } from 'react-router-dom';
import "./style.scss"
interface User {
  email: string;
  password: string;
}

const LoginPage = () => {


  const [login, setUser] = useState<User>({ email: 'eve.holt@reqres.in', password: 'cityslicka' });
  const [errorMessage, setErrorMessage] = useState<string>('');


  const history = useNavigate();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/login', login);
      console.log(response.data);
      if (response.data) {
        history("/home")
      } else {
        history("/")
      }
      // Do something with the authentication token, e.g. save it to local storage
    } catch (error: ChangeEvent<HTMLAllCollection>) {
      // console.log(error.response.data);
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div className="login-form">
      <div className='login-top'>
        <h1>Accountingizga Kirish</h1>
      </div>
        <form className='form-sign' onSubmit={handleFormSubmit}>
          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <TextField type="email" label="Email" id="email" name="email" value={login.email} onChange={handleInputChange} required />
          </div>
          <div>
            {/* <label htmlFor="password">Password:</label> */}
            <TextField label="Password" type="password" id="password" name="password" value={login.password} onChange={handleInputChange} required />
          </div>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <Button variant='contained' type="submit">Login</Button>
        </form>
    </div>
  );
};

export default LoginPage;