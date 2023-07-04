import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { getData } from '../../utils/fetch';


import Layout from '../../components/Layout';
import { Spinner } from 'react-bootstrap';

import Container from '../../components/Container';
import CardPost from '../../components/CardPost';
import DetailPage from '../../components/DetailPage';


import { useSelector } from 'react-redux';

export default function DetailBlog() {

  const {blogId} = useParams();
  const [tempData, setTempData] = useState([]);
  const fetctData = async () => {
    const res = await getData(`/cms/writer/${blogId}`);
    setTempData(res.data.data)
    
  };
  useEffect(() => {

    fetctData();
  }, []);

  const blog = useSelector((state) => state.blog);
  // console.log(blog);


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
          {tempData.map(infoblog => ( 
            <DetailPage {...infoblog} />
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
