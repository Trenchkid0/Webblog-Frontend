/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from './Container';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux';
// import { Figure } from 'react-bootstrap';
import { config } from '../config';
import { Button, Image } from 'react-bootstrap';
import SButton from './SButton';


import { useNavigate } from 'react-router-dom';

export default function Navbar() { 

  // const [auth, setAuth] = useState()

  const navigate = useNavigate();
  
  // const userInfo = useSelector((state) => state.auth);
  const {token} = useSelector((state) => state.auth)
  // console.log(token.participantsId);
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  // console.log(token.participantsId);

    
  return (
    <>

    
    <nav className="pt-5 bg-gradient-to-b from-gray-600 to-gray-900 text-white">
      <Container>
       {token ?(
        <>
        
        
          <div className="flex items-center">
            <div className="lg:w-2/12 w-6/12 flex items-center -mt-3 justify-center lg:justify-start ">
                  <div className="">
                    <Image src={`${config.api_image}${token.profile}`} className="w-10 h-10 rounded-full object-cover mr-4" />
                
                  </div>
                  {token.firstName}            
            </div>

            
            <div className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all`}>
            
              <ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
                <li><Link href="/" className='text-white no-underline'> opik</Link></li>
                <li>Front-End</li>
                <li>Back-End</li>
                
              </ul>

            
            </div>
            
              <li className='cursor-pointer ml-48 list-none' onClick={()=>handleLogout()}>LogOut</li>
          </div>  

          <SButton variant='cursor-pointer -mt-16 ml-[54rem] w-32  btn-light' action={()=>navigate(`/blog/create`)} >Tulis blog</SButton>
        </>
          

       ):(
        
          <>  
          <div className="flex items-center">
             <div className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all`}>
            
            <ul className=" lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
              <li>opik</li>
              <li>Front-End</li>
              <li >Back-End</li>
              
            </ul>

            </div>
              <SButton variant='cursor-pointer ml-96 w-24  btn-light'  action={()=>navigate('/login')}>Sigin</SButton>

          </div>
          </>
        
      

            
       )}
      </Container>
    </nav>
    
    </>
  );
}
