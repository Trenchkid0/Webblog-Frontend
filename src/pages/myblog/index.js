import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import CardPost from '../../components/CardPost';
import { Spinner } from 'react-bootstrap';

export default function MyBlog() {
    const {userId} =useParams();

    const blog = useSelector((state)=>state.blog);

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
                {blog.data.flatMap((dataUser)=>
                (dataUser.participant._id === userId ?
                    <div key={dataUser._id} className="md:w-4/12 w-full px-4 py-6"> 
                        <CardPost {...dataUser} />
                    </div>
                    : 
                    ''
                    ))
}
            </div>
            ):(
            ''
            )}


        </Container>
      
    </Layout>
    
    </>
  )
}
