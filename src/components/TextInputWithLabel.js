import React from 'react';
import { Form } from 'react-bootstrap';
import TextInput from './TextInput';

function TextInputWithLabel({
  label,
  name,
  value, 
  type,
  onChange,
  placeholder,
}) {
  return (
    <Form.Group className='mb-2 text-white'>
      <Form.Label className='mx-10'>{label}</Form.Label>
      <TextInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Group>
  );
}

export default TextInputWithLabel;
