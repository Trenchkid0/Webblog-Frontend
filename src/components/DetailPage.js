import React from 'react'
import { config } from '../config'
import { Figure } from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import PostMetaTitle from './PostMetaTitle'
import InfoPost from './InfoPost'
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
          <p className="text-xl text-center mb-4">
           {content}
          </p>
        </div>
      

    
    </>
  )
}
