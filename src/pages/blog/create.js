import React from 'react'
import { postData } from '../../utils/fetch';
import { useState } from 'react';
import { setNotif } from '../../redux/notif/action';

import { useDispatch} from 'react-redux'; 
import { useNavigate } from 'react-router-dom';



import SForm from './form'


export default function BlogCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const [form, setForm] = useState({
      avatar: '',
      file: '',
      topic: '',
      date: '',
      title: '',
      deskripsi: '',
      content: '',  
    });

    const [alert, setAlert] = useState({
      status: false,
      type: '',
      message: '',
      
    });

    const [word, setWord] = useState(0)

    const [isLoading, setIsLoading] = useState(false);

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
      }else {
        setForm({ ...form, [e.target.name]: e.target.value });

        // if(e.target.name === 'content') {
        //   const limitWords = 1200;
        //   if(e.target.value.length < limitWords) {
        //     setWord(e.target.value.length)
        //   }else{
            
        //   }

        // }

      }
    };

    const handleSubmit = async () => {
      setIsLoading(true);
  
      const payload = {
        image: form.file,
        topic: form.topic,
        date: form.date,
        title: form.title,
        deskripsi: form.deskripsi,
        content: form.content,
      };
  
      const res = await postData('/cms/writer', payload);
  
      if (res.data.data) {
        dispatch(
          setNotif(
            true,
            'success',
            `berhasil tambah blog ${res.data.data.title}`
          )
        );
        navigate('/blog');
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
    

      <SForm
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        word={word}
      />

    
    
  )
}
