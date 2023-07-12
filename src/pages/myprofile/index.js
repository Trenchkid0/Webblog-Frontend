import React from 'react'
import { useEffect,useState } from 'react'
import { getData } from '../../utils/fetch';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Spinner} from 'react-bootstrap';
import Profile from '../../components/Profile';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import SButton from '../../components/SButton';

export default function MyProfile() {
    const navigate = useNavigate();
    const {userId}=useParams();

    const [tempData, setTempData] = useState([]);
    // const {token} = useSelector((state) => state.auth)
    const blog = useSelector((state) => state.blog)

    useEffect(() => {
          const fetctData = async () => {
              const res = await getData(`/cms/participants/${userId}`);
              setTempData(res.data.data)
              
            };
        fetctData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [blog]);

    



  return (
    <>
    <Layout>
        <Container>
        {blog.status === 'process'?(
          <div className='flex items-center justify-center'>
            <Spinner animation='border' variant='primary' />
          </div>
        ):blog.data.length ? (
          <div className="flex -mx-4 flex-wrap mt-6">
          {tempData.map(infoblog => ( 
            <Profile {...infoblog} />
      ))}
      </div>
      
    ):(
      ''
    )}
        <SButton variant='outline-primary' action={()=>navigate(`/myprofile/edit/${userId}`)}>Edit</SButton>
        </Container>
      
    </Layout>
    
    </>
  )
}
