import React from 'react'
import { Form } from 'react-bootstrap'

export default function TextAreas({name, value, type, onChange,}) {
  return (
    <Form.Control as="textarea"
        type={type}
        name={name}
        value={value} // state
        onChange={onChange}
        className='h-44 bg-transparent caret-pink-500 text-white mx-10 '
        style={{ width: '85%' }}
    />
    
  )
}
