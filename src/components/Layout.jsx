import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from "../Pages/Home"; // Corrected path
import StoryContainer from './StoryContainer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
