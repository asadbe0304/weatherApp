import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home";
import Login from "./pages/Login/login"
import Sign from "./pages/sign/index"
import Header from "./components/header"

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Sign />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;