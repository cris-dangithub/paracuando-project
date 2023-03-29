import React from 'react';
import { Footer } from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';

interface IConfigLayout {
  children: React.ReactNode;
}

export const ConfigLayout: React.FC<IConfigLayout> = ({ children }) => {
  return (
    <>
      <div className="overflow-x-hidden min-h-screen app-flex-column justify-between">
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};
