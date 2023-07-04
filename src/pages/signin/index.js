import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SAlert from '../../components/Alert';
import SForm from './form';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/auth/action';
import axios from 'axios';

import { config } from '../../config';

function PageSignin() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [alert, setAlert] = useState({
    status: false,
    message: '',
    type: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const res = await axios.post(`${config.api_host_dev}${`/auth/signin`}`, form);


    if (res?.data?.data) {
      dispatch(
        userLogin(
          res.data.data.token,
          res.data.data.role,
          res.data.data.firstName,
        )
      );
      setIsLoading(false);
      navigate('/hero');
    } else {
      setIsLoading(false);
      setAlert({
        status: true,
        message: res?.response?.data?.msg ?? 'Internal server error',
        type: 'danger',
      });
    }
  };

  return (
    <div className=' bg-gradient-to-b from-gray-600 to-gray-900 h-screen'>

    <Container>
      <div className='m-auto' style={{ width: '50%' }}>
        {alert.status && <SAlert type={alert.type} message={alert.message} />}
      </div>
      <Card style={{ width: '50%'}} className='m-auto top-28 bg-gradient-to-b from-gray-600 to-gray-900 border-none '>
        <Card.Body className='h-[20rem] mt-12'> 
          <Card.Title className='text-center text-white'>Form Signin</Card.Title>
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
    
  );
}

export default PageSignin;
