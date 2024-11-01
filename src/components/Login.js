// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css';

// const LoginPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="login-container">
//       <div className="animated-background"></div>
//       <div className="login-card animate-card">
//         <h2 className="brand-title">My Brand</h2>
//         <p className="login-subtitle">Choose Your Path</p>
//         <button className="login-button user-button" onClick={() => navigate('/user-dashboard')}>
//           User
//         </button>
//         <button className="login-button admin-button" onClick={() => navigate('/admin-dashboard')}>
//           Admin
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="brand-title">Triumph Motorcycles</h1>
        <p className="login-subtitle">Select Your Access</p>
        <button
          className="login-button user-button"
          onClick={() => navigate('/user-dashboard')}
        >
          User Access
        </button>
        <button
          className="login-button admin-button"
          onClick={() => navigate('/admin-dashboard')}
        >
          Admin Access
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
