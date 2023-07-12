import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getData } from '../../utils/fetch';
import { postData,putData } from '../../utils/fetch';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import SForm from './form';
import Layout from '../../components/Layout';
import Container from '../../components/Container';

export default function MyProfileEdit() {
    const {userId}= useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName:'',
        lastName:'',
        email: '',
        role:'',
        file: '',
        avatar: '',
      });

      const [alert, setAlert] = useState({
        status: false,
        message: '',
        type: '',
      });

      const [isLoading, setIsLoading] = useState(false);

      const fetchProfile = async()=>{
        const res = await getData(`/cms/participants/${userId}`);
        console.log(res.data.data);
        
        res.data.data.forEach((respData)=>{
            console.log(respData.image._id);
            setForm({
                ...form,
                firstName:respData.firstName,
                lastName:respData.lastName,
                email:respData.email,
                role:respData.role,
                avatar:respData.image.name,
                file:respData.image._id,

            }            
                )
        })
      }

      
      useEffect(() => {
        fetchProfile();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      const uploadImage = async (file) => {
        let formData = new FormData();
        formData.append('avatar', file);
        const res = await postData('/cms/images', formData, true);
        return res;
      };
    
      const handleChange = async (e) => {
        if (e.target.name === 'avatar') {
          if (
            e?.target?.files[0]?.type === 'image/jpg' ||
            e?.target?.files[0]?.type === 'image/png' ||
            e?.target?.files[0]?.type === 'image/jpeg'
          ) {
            var size = parseFloat(e.target.files[0].size / 3145728).toFixed(2);
    
            if (size > 2) {
              setAlert({
                ...alert,
                status: true,
                type: 'danger',
                message: 'Please select image size less than 3 MB',
              });
              setForm({
                ...form,
                file: '',
                [e.target.name]: '',
              });
            } else {
              const res = await uploadImage(e.target.files[0]);
    
              setForm({
                ...form,
                file: res.data.data._id,
                [e.target.name]: res.data.data.name,
              });
            }
          } else {
            setAlert({
              ...alert,
              status: true,
              type: 'danger',
              message: 'type image png | jpg | jpeg',
            });
            setForm({
              ...form,
              file: '',
              [e.target.name]: '',
            });
          }
        } else {
          setForm({ ...form, [e.target.name]: e.target.value });
        }
      };

      const handleSubmit = async () => {
        setIsLoading(true);

        const payload = {
            firstName:form.firstName,
            lastName:form.lastName,
            email: form.email,
            role:form.role,
            image: form.file,
          };
    
        const res = await putData(`/cms/participants/${userId}`, payload);
        // navigate(`/myprofile/${userId}`);

        if (res.data.data) {
            Swal.fire({
                title: `Data ${res.data.data.firstName} Berhasil Terupdate`,
                icon: 'success',
            })
    
          navigate(`/myprofile/${userId}`);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setAlert({
            ...alert,
            status: true,
            type: 'danger',
            message: res.response.data.msg,
          });
        }
        
      };
    
      

  return (
    <>
    
        <Layout>
            <Container>
                <SForm
                    form={form}
                    handleChange={handleChange}
                    isLoading={isLoading}
                    handleSubmit={handleSubmit}
                            
                />

            </Container>

        </Layout>
    
    </>
  )
}
