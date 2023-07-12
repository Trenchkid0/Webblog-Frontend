import React from 'react'
import { Image } from 'react-bootstrap'
import { config } from '../config'

export default function Profile({firstName, lastName,image,role}) {
  return (
    <>
        
        <h1 className='text-center'>Profile</h1>
        <div className='lg:ml-40 flex'>
          <div className=' flex items-center justify-center h-screen '>

            <Image src={`${config.api_image}${image.name}`} className="w-52 h-52 rounded-full object-cover  " />

          </div>
          <div className='flex flex-col mx-32 justify-center h-screen text-left'>

            <p className='mb-3'>First Name: </p>
            <h3 className='mb-3'>{firstName} </h3>
            <p className='mb-3'>Last Name: </p>
            <h3 className='mb-3'>{lastName} </h3>
            <p className='mb-3'>Role: </p>
            <h3 className='mb-3'>{role} </h3>

          </div>

        </div>
        
    
    </>
  )
}
