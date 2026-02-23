import React, { useState } from 'react';

const PasswordForm = ({ onAdd }) => {
  const [appName, setAppName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!appName || !login || !password) return;
    onAdd({ appName, login, password });
    setAppName('');
    setLogin('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="password-form">
      <input
        type="text"
        placeholder="Application"
        value={appName}
        onChange={(e) => setAppName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn">Add</button>
    </form>
  );
};

export default PasswordForm;
