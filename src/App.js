import React, { useState, useEffect } from 'react';
import './App.css';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';

function App() {
  const [passwords, setPasswords] = useState(() => {
    const saved = localStorage.getItem('passwords');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('passwords', JSON.stringify(passwords));
  }, [passwords]);

  const addPassword = (entry) => {
    setPasswords([...passwords, entry]);
  };

  const deletePassword = (index) => {
    setPasswords(passwords.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Password Manager</h1>
      <PasswordForm onAdd={addPassword} />
      <PasswordList passwords={passwords} onDelete={deletePassword} />
    </div>
  );
}

export default App;
