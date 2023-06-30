import React from 'react'
import TextAreaWithLabel from '../../components/TextAreaWithLabel'
import SButton from '../../components/SButton'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import { Figure } from 'react-bootstrap'
import { config } from '../../config'

export default function SForm({form, handleChange, handleSubmit, isLoading,word,alertword}) {
    console.log(alertword)
  return (
    <>
    {form.avatar !== '' && (
        <div className='flex justify-center items-center mt-4'>
          <Figure>
            <Figure.Image
              width={500}
              height={500}
              alt='171x180'
              src={`${config.api_image}${form.avatar}`}
            />

            <Figure.Caption>Perview image avatar</Figure.Caption>
          </Figure>
        </div>
      )}
      <TextInputWithLabel
        placeholder={'Masukan Avatar'}
        label={'Avatar'}
        name='avatar'
        // value={form.avatar}
        type='file'
        onChange={handleChange}
      />

    <TextInputWithLabel
    label={'Topic'}
    name='topic'
    value={form?.topic}
    type='text'
    onChange={handleChange}
    className='text-white'

    />
     <span className={alertword}>{word.topic}/25</span>
    <TextInputWithLabel
    label={'date'}
    name='date'
    value={form?.date}
    type='date'
    onChange={handleChange}
    />
    <TextAreaWithLabel
    label={'Isi Blog'}
    name='content'
    value={form?.content}
    type='text'
    onChange={handleChange}

    />
    <span className={alertword}>{word.content}/1200</span>
   <SButton variant='primary' action={handleSubmit} loading={isLoading}>
      Upload
    </SButton>
    
    
    </>
  )
}
