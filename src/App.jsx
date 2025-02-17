import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Navbar from './components/Navbar/Navbar';
import Stall from './pages/Stall/Stall';
import Profile from './pages/Profile/Profile';
import Project from './pages/Project/Project';
import StallOpen from './components/StallOpen/StallOpen';

function AppContent() {
  const location = useLocation();
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stall" element={<Stall />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Project />} />
        <Route path="/stallopen" element={<StallOpen />} />
      </Routes>
      {location.pathname !== "/login" && <Navbar className='mindaa' />}

    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
