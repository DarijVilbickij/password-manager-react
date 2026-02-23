import React from 'react';

const PasswordItem = ({ password, onDelete }) => {
  return (
    <li style={{ marginBottom: '0.5rem', border: '1px solid #ccc', borderRadius: 4, padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span>
        <strong>{password.appName}</strong> | <em>{password.login}</em> | {password.password}
      </span>
      <button onClick={onDelete} className="btn btn-delete">Delete</button>
    </li>
  );
};

export default PasswordItem;
