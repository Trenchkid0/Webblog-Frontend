import React from 'react';
import SButtons from '../../components/SButton';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import { Form,Figure } from 'react-bootstrap';
import { config } from '../../config';

import { useNavigate } from 'react-router-dom';

export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
  const navigate = useNavigate();
  return (
    <Form>
      <TextInputWithLabel
        placeholder={'Masukan nama depan'}
        label={'First Name'}
        name='firstName'
        value={form?.firstName}
        type='text'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'Masukan Nama Belakang'}
        label={'Last Name'}
        name='lastName'
        value={form?.lastName}
        type='text'
        onChange={handleChange}
      />
       <TextInputWithLabel
        placeholder={'email'}
        label={'Email'}
        name='email'
        value={form?.email}
        type='email'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'role'}
        label={'Role'}
        name='role'
        value={form?.role}
        type='text'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'password'}
        label={'password'}
        name='password'
        value={form?.password}
        type='password'
        onChange={handleChange}
      />
       <TextInputWithLabel
          label={'Role'}
          type={'text'}
          value={form?.role}
          name='role'
          placeholder='ex: Product Designer'
          onChange={handleChange}
        />
       <TextInputWithLabel
        placeholder={'Masukan Avatar'}
        label={'Avatar'}
        name='avatar'
        type='file'
        onChange={handleChange}
      />
      {form.avatar !== '' && (
        <div>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt='171x180'
              className='lg:ml-10'
              src={`${config.api_image}${form.avatar}`}
            />

            <Figure.Caption>Perview image avatar</Figure.Caption>
          </Figure>
        </div>
      )}
      <SButtons
        loading={isLoading}
        disabled={isLoading}
        variant='light mr-5'
        action={handleSubmit}
      >
        Submit
      </SButtons>
      <SButtons
        variant='light'
        action={()=>navigate('/login')}
      >
        Sudah punya akun?
      </SButtons>
    </Form>
  );
}
