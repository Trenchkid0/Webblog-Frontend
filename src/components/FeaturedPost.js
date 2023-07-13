// import Link from 'next/link';
import { useState } from 'react';
import InfoPost from './InfoPost';
import { config } from '../config'

import { Figure } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function FeaturedPost({data}) {

  // console.log(data[0])
    const navigate = useNavigate()

  return (
    <article className='mt-4'>
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
            <li className="list-none cursor-pointer " 
            onClick={()=>navigate(`/detail/${data[0]._id}`)}
            >
                <Figure>
                <Figure.Image
                className="w-full rounded mb-4"
                alt='171x180'
                src={`${config.api_image}${data[0].image.name}`}
                />

                </Figure>
            </li>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost
            topic={data[0].topic}
            blogId={data[0]._id}
            createdAt={data[0].createdAt}
            title={data[0].title}
            deskripsi={data[0].deskripsi}
            participant={data[0].participant}
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  );
}
