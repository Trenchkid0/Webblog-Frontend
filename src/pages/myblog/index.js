import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import CardPost from '../../components/CardPost';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { fetchBlog } from '../../redux/blog/action';
import { deleteData } from '../../utils/fetch';


import SButton from '../../components/SButton';

export default function MyBlog() {
    const {userId} =useParams();

    const dispatch = useDispatch();
    const blog = useSelector((state)=>state.blog);

    const handleDelete = (id) => {
        Swal.fire({
          title: 'Apa kamu yakin?',
          text: 'Anda tidak akan dapat mengembalikan ini!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Iya, Hapus',
          cancelButtonText: 'Batal',
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res = await deleteData(`/cms/writer/${id}`);
            console.log(res)

            Swal.fire({
                title: 'Berhasil Terhapus',
                icon: 'success',
              })
    
            // dispatch(
            //   setNotif(
            //     true,
            //     'success',
            //     `berhasil hapus speaker ${res.data.data.title}`
            //   )
            // );
    
            dispatch(fetchBlog());
          }
        });
      };

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
                {blog.data.toReversed().flatMap((dataUser)=>
                (dataUser.participant._id === userId ?
                    <div key={dataUser._id} className="md:w-4/12 w-full px-4 py-6"> 
                        <CardPost {...dataUser} />
                        <SButton variant='outline-danger' className='my-10 ml-52' action={()=>handleDelete(dataUser._id)} children='Hapus' ></SButton>
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
