import React from 'react'
import { config } from '../config'
import {Image} from 'react-bootstrap'
import PostMetaTitle from './PostMetaTitle'
import PostAuthor from './PostAuthor'

export default function DetailPage({
  image,
  topic,
  title,
  createdAt,
  participant,
  content
}) {
    return (
    <>
    <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
          <PostMetaTitle
            topic={topic}
            date={createdAt}
            title={title}
            center
          />
          <PostAuthor
            partcipant={participant}
          />
    </div> 

     <div className="md:w-10/12 w-full mx-auto my-10">
      
            <Image
            className=" rounded mb-4"
            alt='171x180'
            src={`${config.api_image}${image.name}`}
            />
      </div> 
      <div className="md:w-8/12 w-full mx-auto leading-relaxed">
          <p className=" lg:text-xl ml-2 mb-4">
           {content}
          </p>
        </div>
      

    
    </>
  )
}
