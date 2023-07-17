import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SForm from './form';
import SAlert from '../../components/Alert'
import { useDispatch } from 'react-redux';
import { setNotif } from '../../redux/notif/action';
import axios from 'axios';
import { config } from '../../config';


function PageSignup() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName:'',
    lastName:'',
    password: '',
    email: '',
    role: '',
    file: '',
    avatar: '',
  });

  const [alert, setAlert] = useState({
    status: false,
    message: '',
    type: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = async (file) => {
    let formData = new FormData();
    formData.append('avatar', file);
    const res = await axios.post(`${config.api_host_dev}${`/cms/images`}`, formData, true);
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
      console.log(e.target.name);
      
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      firstName:form.firstName,
      lastName:form.lastName,
      password:form.password,
      email:form.email,
      image: form.file,
      role: form.role,
    };

    const res = await axios.post(`${config.api_host_dev}${`/auth/signup`}`, payload);

    if (res.data.data) {
      dispatch(
        setNotif(
          true,
          'success',
          `berhasil tambah talents ${res.data.data.name}`
        )
      );
      navigate('/login');
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
      {/* <Layout> */}
      <div className=' bg-gradient-to-b from-gray-600 to-gray-900 h-[75rem]'>


        <Container>
          <div className='m-auto' style={{ width: '50%' }}>
            {alert.status && <SAlert type={alert.type} message={alert.message} />}
          </div>
          <Card style={{ width: '50%'}} className='m-auto  bg-gradient-to-b from-gray-600 to-gray-900'>
            <Card.Body className='h-[60rem] mt-10'> 
              <Card.Title className='text-center text-white'>Form signup</Card.Title>
              <SForm
                form={form}
                handleChange={handleChange}
                isLoading={isLoading}
                handleSubmit={handleSubmit}
                
              />
            </Card.Body>
          </Card>
          
        </Container>


      </div>


      {/* </Layout> */}


    
    
    </>
    
  );
}

export default PageSignup;
