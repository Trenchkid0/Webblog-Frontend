import React from 'react'


import { useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import { Spinner } from 'react-bootstrap';

import Container from '../../components/Container';
import CardPost from '../../components/CardPost';
import { fetchBlog } from '../../redux/blog/action';
import FeaturedPost from '../../components/FeaturedPost';


export default function Blog() {
    const dispatch = useDispatch();
    const blog = useSelector((state) => state.blog);
    console.log(blog);

     useEffect(() => {
        dispatch(fetchBlog());

        
    }, [dispatch]);

    
  return (
    <>
    
    <Layout>
      <Container>
        {blog.status === 'process'?(
          <div className='flex items-center justify-center'>
            <Spinner animation='border' variant='primary' />
          </div>
        ):blog.data.length === 1 ? (
            <div className="flex -mx-4 flex-wrap mt-6">
              
              {/* <FeaturedPost data={blog.data.toReversed()} /> */}
              {blog.data.toReversed().map(post => (
               
                <div key={post._id} className="md:w-4/12 w-full px-4 py-6">
                
                <CardPost {...post} />
            </div>
          ))}
          </div>
        ):blog.data.length > 1 ? (
          <div className="flex -mx-4 flex-wrap mt-6">
            
            <FeaturedPost data={blog.data.toReversed()} />
            {blog.data.toReversed().map(post => (
             
              <div key={post._id} className="md:w-4/12 w-full px-4 py-6">
              
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
