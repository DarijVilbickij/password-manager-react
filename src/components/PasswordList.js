import React from 'react';
import PasswordItem from './PasswordItem';

const PasswordList = ({ passwords, onDelete }) => {
  return (
    <ul className="password-list">
      {passwords.map((password, index) => (
        <PasswordItem key={index} password={password} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
};

export default PasswordList;
