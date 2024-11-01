// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
