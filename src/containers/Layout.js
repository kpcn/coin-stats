import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-gray-900 bg-gray-100">
      <div className="xl:container xl:mx-auto xl:px-52">
        <Header name="Coin Stats" />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
