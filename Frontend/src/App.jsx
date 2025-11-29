import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing';
import Auth from './views/Auth';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
