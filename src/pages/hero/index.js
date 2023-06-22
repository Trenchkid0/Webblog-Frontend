import React from 'react'


import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import Layout from '../../components/Layout';

import Container from '../../components/Container';
import CardPost from '../../components/CardPost';
import { fetchBlog } from '../../redux/blog/action';


export default function Hero() {
    const dispatch = useDispatch();
    const blog = useSelector((state) => state.blog);


    const data = blog.data;
    const [posts, setPosts] = useState(data)
    console.log(posts)

     useEffect(() => {
        dispatch(fetchBlog());
    }, [dispatch]);
   
  

    
  return (
    <Layout>
    <title>Home &mdash; Epictetus</title>
    <Container>
        <div className="flex -mx-4 flex-wrap mt-6">
        {data.map(post => ( 
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
            <CardPost {...post} />
            </div>
        ))}
        </div>
    </Container>
</Layout>
  )
}
