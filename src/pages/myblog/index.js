import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { getData } from '../../utils/fetch';


import Layout from '../../components/Layout';
import { Spinner } from 'react-bootstrap';

import Container from '../../components/Container';
import CardPost from '../../components/CardPost';

import { useSelector } from 'react-redux';

export default function MyBlog() {

  const {userId} = useParams();
  const [tempData, setTempData] = useState([]);
  const fetctData = async () => {
    const res = await getData(`/cms/writer/${userId}`);
    setTempData(res.data.data)
    
  };
  useEffect(() => {

    fetctData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blog = useSelector((state) => state.blog);


  console.log(tempData);

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
          {tempData.toReversed().map(post => ( 
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
            <CardPost {...post} />
        </div>
      ))}
      </div>
    ):(
      ''
    )}
        
    </Container>
  </Layout>
    
    </>
  )
}
