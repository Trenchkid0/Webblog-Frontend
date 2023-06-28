import React from 'react'
import { Form } from 'react-bootstrap';
import TextAreas from './TextArea';

export default function TextAreaWithLabel({ 
    label,
    name,
    value, 
    type,
    onChange}) {
  return (
    <Form.Group className='mb-2'>
      <Form.Label>{label}</Form.Label>
      <TextAreas
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  )
}
