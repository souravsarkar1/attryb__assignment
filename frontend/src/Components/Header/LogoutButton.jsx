import React from 'react';
import Cookies from 'js-cookie';

const LogoutButton = () => {
  const handleLogout = () => {
    // Remove the "dealerToken" cookie
    Cookies.remove('dealerToken');

    // Add any additional logic you need for logout, such as redirecting to a login page
    // window.location.href = '/login'; // Redirect to the login page, for example
  };

  return (
    <div>
    <br /><br /><br /><br />
      <h1>Welcome, Dealer!</h1>
      <p>You are currently logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
