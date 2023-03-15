import React from 'react';
import { Footer } from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <main className="app-container ">{children}</main>
        <Footer />
      </div>
    </>
  );
};
