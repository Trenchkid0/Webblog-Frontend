/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from './Container';
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux';
// import { Figure } from 'react-bootstrap';
import { config } from '../config';
import { Image } from 'react-bootstrap';
import SButton from './SButton';

import { useNavigate } from 'react-router-dom';

export default function Navbar() { 

  const [auth, setAuth] = useState()

  const navigate = useNavigate();
  
  const userInfo = useSelector((state) => state.auth);
  // console.log(userInfo.token.role)
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  useEffect(() => {
    return setAuth(localStorage.getItem('auth'));
  }, []);

  // console.log(auth)
    
    
  return (
    <>
    <nav className="py-10">
      <Container>
       {auth ?(
          <div className="flex items-center">
            <div className="lg:w-2/12 w-6/12 flex items-center justify-center lg:justify-start ">
                  <div className="">
                    <Image src={`${config.api_image}${userInfo.token.profile}`} className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl" />
                
                  </div>
                  {userInfo.token.firstName}            
            </div>

            
            <div className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all`}>
            
              <ul className=" lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
                <li>opik</li>
                <li>Front-End</li>
                <li >Back-End</li>
                
              </ul>

            
            </div>
              <li className='cursor-pointer ml-48 list-none' onClick={()=>handleLogout()}>LogOut</li>
          </div>  

       ):(
        
          <>  
          <div className="flex items-center">
             <div className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all`}>
            
            <ul className=" lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
              <li>opik</li>
              <li>Front-End</li>
              <li >Back-End</li>
              
              <SButton action={()=>navigate('/login')}>Sigin</SButton>
            </ul>

          
          
            </div>

          </div>
          </>
        
      

            
       )}
      </Container>
    </nav>
    
    </>
  );
}
