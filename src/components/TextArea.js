import React from 'react'
import { Form } from 'react-bootstrap'

export default function TextAreas({name, value, type, onChange,}) {
  return (
    <Form.Control as="textarea"
        type={type}
        name={name}
        value={value} // state
        onChange={onChange}
    
    />
    
  )
}
