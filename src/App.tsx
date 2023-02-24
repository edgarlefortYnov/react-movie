import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Films from './pages/AllFilm';
import Login from './pages/Login';
import Acteurs from './pages/AllActeur';
import Favorite from './pages/Favorite';
import Register from './pages/Register';
import './App.css';
import './Layout.css';
import './Home.css';
import './Footer.css';
import './Login.css';
import './Actors.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='all_films' element={<Films />} />
            <Route path='all_acteurs' element={<Acteurs />} />
            <Route path='fav' element={<Favorite />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;