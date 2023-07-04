import React from 'react';
import SButtons from '../../components/SButton';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
  const navigate = useNavigate();
  return (
    <Form>
      <TextInputWithLabel
        placeholder={'Masukan email'}
        label={'Email'}
        name='email'
        value={form?.email}
        type='email'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'Masukan password'}
        label={'Password'}
        name='password'
        value={form?.password}
        type='password'
        onChange={handleChange}
      />
      <SButtons
        loading={isLoading}
        disabled={isLoading}
        variant='light mt-5 mr-5'
        action={handleSubmit}
      >
        Submit
      </SButtons>
      <SButtons
        variant='light mt-5'
        action={()=>navigate('/signup')}
      >
        Belum punya akun?
      </SButtons>
      
    </Form>
  );
}
