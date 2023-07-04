import React from 'react'
import TextAreaWithLabel from '../../components/TextAreaWithLabel'
import SButton from '../../components/SButton'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import { Figure } from 'react-bootstrap'
import { config } from '../../config'

export default function SForm({form, handleChange, handleSubmit, isLoading,word}) {
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
        label={'Thumbnails'}
        name='avatar'
        type='file'
        onChange={handleChange}
      />
     <TextInputWithLabel
    label={'Title'}
    name='title'
    value={form?.title}
    type='text'
    onChange={handleChange}
    

    />
    <span className='my-5' >{word.title}/30</span>

  <TextAreaWithLabel
    label={'Deskripsi'}
    name='deskripsi'
    value={form?.deskripsi}
    type='text'
    onChange={handleChange}
    

    />
    <span className='my-5' >{word.deskripsi}/500</span>
    

    <TextInputWithLabel
    label={'Topic'}
    name='topic'
    value={form?.topic}
    type='text'
    onChange={handleChange}
    className='w-36'
    

    />
    <span className="my-4" >{word.topic}/25</span>
    <TextAreaWithLabel
    label={'Isi Blog'}
    name='content'
    value={form?.content}
    type='text'
    onChange={handleChange}
    
    />
    <span className="my-4" >{word.content}/1200</span><br/><br/>
   <SButton variant='primary' action={handleSubmit} loading={isLoading}>
      Upload
    </SButton>
    
    
    </>
  )
}
