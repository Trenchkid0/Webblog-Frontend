import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlog } from '../redux/blog/action';




export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Navbar/>
      {children}
      <Footer />
    </div>
  );
}
