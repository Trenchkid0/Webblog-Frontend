import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { getData } from '../../utils/fetch'

import Layout from '../../components/Layout'
import Container from '../../components/Container'
import { Spinner } from 'react-bootstrap'
import CardPost from '../../components/CardPost'


export default function BlogCreate() {

    const [userId, setUserId] = useState()
    const [blogUserId, setBlogUserId] = useState()
    const {token} = useSelector((state) => state.auth)
    const blog =useSelector((state) =>state.blog)
    // setUserId(token.participantsId);
    // console.log(userId);

    useEffect(() => {
        const fetchDatas = async () => {
        try {
            const res = await getData(`/cms/writer/${blogUserId}`)
            console.log(res)
            setBlogUserId(res.data);
        } catch (error) {}
    }
    fetchDatas();
    }, [])
    
  return (
    <>
    <h1>asw</h1>
    <Layout>
    <title>Home &mdash; MyBlog</title>
    <Container>
      {/* {blog.status === 'process'?(
        <div className='flex items-center justify-center'>
          <Spinner animation='border' variant='primary' />
        </div>
      ):blogUserId.data.length ? (
          <div className="flex -mx-4 flex-wrap mt-6">
            {blog.data.map(post => ( 
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
          </div>
        ))}
        </div>
      ):(
        <h1>Tidak Ditemukan Data</h1>
      )} */}
        
    </Container>
    </Layout>
    
    </>
  )
}
