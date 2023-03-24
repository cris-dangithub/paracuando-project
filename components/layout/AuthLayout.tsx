import React from 'react';
import Logo from '../assets/logo/Logo';

interface IAuthLayout {
  children: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayout> = ({ children }) => {
  return (
    <div>
      <Logo variant="yellow" />
    </div>
  );
};

export default AuthLayout;
