/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from './Container';
import React, { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';
import {  Image } from 'react-bootstrap';
import SButton from './SButton';

import { useNavigate } from 'react-router-dom';
import {useSelector } from 'react-redux';

import Layout from '../components/Layout';

import CardPost from '../components/CardPost';
import axios from 'axios';

export default function Navbar() { 

  const [tempData, setTempData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`${config.api_host_dev}${`/cms/writer`}`);
    setTempData(res.data.data);
    
  };
  useEffect(() => {
    fetchData();
 }, []);


  const navigate = useNavigate();

  const {token} = useSelector((state) => state.auth)

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

    
  return (
    <>

    
    <nav className="pt-5 bg-gradient-to-b from-gray-600 to-gray-900 text-white  ">
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
                <li onClick={()=>navigate('/blog')} ><Link className='text-white no-underline'> Home </Link></li>
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

    {!token ?(
        <Layout>
        <Container>
        <div className="flex -mx-4 flex-wrap mt-6">
                {tempData.toReversed().map(post => ( 
                  <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                  <CardPost {...post} />
              </div>
            ))}
            </div>
          
      </Container>
    </Layout>
    ):(
      ''
    ) }
    
    </>
  );
}
