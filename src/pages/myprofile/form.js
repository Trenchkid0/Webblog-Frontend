import React from 'react'
import SButtons from '../../components/SButton';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import { Form,Figure } from 'react-bootstrap';
import { config } from '../../config';

export default function SFrom({form, handleChange, handleSubmit, isLoading}) {
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
          className='lg:ml-10'
            width={171}
            height={180}
            alt='171x180'
            src={`${config.api_image}${form.avatar}`}
          />

          <Figure.Caption className='lg:ml-10'>Perview image avatar</Figure.Caption>
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
    </Form>
  )
}
