import React from 'react'
import TextAreaWithLabel from '../../components/TextAreaWithLabel'
import SButton from '../../components/SButton'

export default function SForm({form, handleChange, handleSubmit, isLoading,word}) {
  return (
    <>
    <TextAreaWithLabel
    label={'Isi Blog'}
    name='content'
    value={form?.content}
    type='text'
    onChange={handleChange}

    />
    <span>{word}</span>
   <SButton variant='primary' action={handleSubmit} loading={isLoading}>
      Upload
    </SButton>
    
    
    </>
  )
}
