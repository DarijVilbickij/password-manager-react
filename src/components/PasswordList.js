import React from 'react';
import PasswordItem from './PasswordItem';

const PasswordList = ({ passwords, onDelete }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {passwords.map((password, index) => (
        <PasswordItem key={index} password={password} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
};

export default PasswordList;
