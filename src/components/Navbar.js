/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from './Container';
import React, { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';
import {  Image, NavDropdown } from 'react-bootstrap';
import SButton from './SButton';
import {Button} from 'react-bootstrap';

import {
  fetchBlog,
  setKeyword,
} from '../redux/blog/action';

import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch } from 'react-redux';

import Layout from '../components/Layout';

import CardPost from '../components/CardPost';
import axios from 'axios';

export default function Navbar() { 
  const dispatch =useDispatch();
  const blog = useSelector((state) => state.blog);
  const {token} = useSelector((state) => state.auth)


  const [tempData, setTempData] = useState([]);
  const [tempDataUser, setTempDataUser] = useState([]);

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch, blog.keyword]);

  const fetchData = async () => {
    const res = await axios.get(`${config.api_host_dev}${`/cms/writer`}`);
    setTempData(res.data.data);
    
  };



  

  useEffect(() => {
    fetchData();
    if(token){
      const fetchOneData = async () => {
      const res = await axios.get(`${config.api_host_dev}${`/cms/participants/${token.participantsId}`}`);
      setTempDataUser(res.data.data);
      console.log(tempDataUser);
    };
      fetchOneData();
    }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

 

  const navigate = useNavigate();
  const [offcavnas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);

  

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
        {tempDataUser.map(dataUser=>(


          <><div className="flex items-center">
            <div className="w-3/12 lg:hidden">
              <button onClick={() => setOffcanvas(!offcavnas)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </svg>
              </button>
            </div>

            <div className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${offcavnas ? 'left-0' : '-left-full'}`}>
              <button
                className="absolute top-10 right-10 lg:hidden"
                onClick={() => setOffcanvas(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
                <div className=" lg:w-2/12 w-6/12 flex  items-center justify-center lg:justify-start ">
                  <NavDropdown menuVariant="dark" className=''>
                    <NavDropdown.Item onClick={() => navigate(`/myprofile/${token.participantsId}`)}>MyProfile</NavDropdown.Item>
                  </NavDropdown>
                  <div className="">
                    <Image src={`${config.api_image}${dataUser.image.name}`} className="w-10 h-10 rounded-full object-cover  " />

                  </div>
                  <div className='ml-1'>

                    {dataUser.firstName}

                  </div>

                </div>


                <li onClick={() => navigate('/blog')}><Link className='text-white no-underline'> Home </Link></li>
                <li>Front-End</li>
                <li>Back-End</li>
                <li className='cursor-pointer' onClick={() => navigate(`/myblog/${token.participantsId}`)}>My Blog</li>
              </ul>

            </div>
            <li className='lg:ml-96 lg:mb-2 ml-52 cursor-pointer list-none' onClick={() => handleLogout()}>LogOut</li>
          </div><Button className='lg:ml-[54rem] lg:-mt-24 ml-28 -mt-14  cursor-pointer w-32   btn-light' onClick={() => navigate(`/blog/create`)}>Tulis blog</Button><div className={`lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all ${search ? 'top-10' : '-top-40'}`}>
              <button
                className="absolute top-3 right-14 lg:hidden" onClick={() => setSearch(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <input type='text' className='bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12'
                onChange={(e) => dispatch(setKeyword(e.target.value))}
                query={blog.keyword}
                placeholder='search...' />
            </div><div className="w-3/12 lg:hidden  text-right">
              <button onClick={() => setSearch(!search)}>
                <svg className="inline-block -mt-14 mb-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </svg>
              </button>
            </div></>
        ))}

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
