import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home";
import Login from "./pages/Login/login"
import Header from "./components/header"

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;