import React from 'react';
import { Footer } from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <div className="overflow-x-hidden min-h-screen app-flex-column justify-between">
        <Header />
        <main className="app-container mt-0 ">{children}</main>
        <Footer />
      </div>
    </>
  );
};
