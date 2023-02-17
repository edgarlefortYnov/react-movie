import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';
import Films from './pages/AllFilm';
import Login from './pages/Login';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='all_films' element={<Films />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;