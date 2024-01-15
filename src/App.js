import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Psignup from './components/Psignup/Psignup';
import Adminpage from './components/Admin/Adminpage';
import UserManagement from './components/Admin/ProductManagement';
import Dashboard from './components/Admin/Dashboard';
import Combine from './components/Admin/Combine';
import Home1 from './components/Home/Home1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Psignup />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/combine" element={<Combine />} />
        <Route path="/home" element={<Home1 />} />
      </Routes>
    </Router>
  );
}

export default App;
