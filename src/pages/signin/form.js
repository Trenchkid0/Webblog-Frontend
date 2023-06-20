import React from 'react';
import SButtons from '../../components/SButton';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import { Form } from 'react-bootstrap';

export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
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
        variant='primary'
        action={handleSubmit}
      >
        Submit
      </SButtons>
    </Form>
  );
}
