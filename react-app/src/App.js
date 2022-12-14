import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import N1 from './components/N1';
import N2 from './components/N2';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';
import LuoVisualisointinäkymä from './components/LuoVisualisointinäkymä';
import { Routes, Route } from 'react-router-dom';
import UserComponent from './components/UserComponent';
import Profile from './components/Profile';


function App() {
 return (
  <>
  
    <Navbar />
    <Header />
    <div class='container'>
      <Routes>
        <Route path="/" element={<N1 />} />
        <Route path="/N1" element={<N1 />} />
        <Route path="/N2" element={<N2 />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/LuoVisualisointinäkymä" element={<LuoVisualisointinäkymä/>} />
        <Route path='/views/:id' element={<UserComponent/>}/> 
        <Route path='/profile' element={<Profile/>}/> 
        </Routes>
      </div>
    <Footer />
  </>
 );
}

export default App;

