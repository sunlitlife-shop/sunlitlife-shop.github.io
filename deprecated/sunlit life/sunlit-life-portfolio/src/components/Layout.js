import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-off-white-dark to-off-white relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"></div>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;