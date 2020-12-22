import React from 'react';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import '../../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
