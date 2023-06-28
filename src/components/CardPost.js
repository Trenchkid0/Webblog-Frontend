import InfoPost from "./InfoPost";
import { Link } from "react-router-dom";
import { config } from '../config'

import { Figure } from "react-bootstrap";

export default function CardPost({ 
    image, 
    ...infoPost 
}) {


  return (
    <>
    <article>
        
      <Link href={`/detail/${infoPost._id}`}>
        <Figure>
          <Figure.Image
          className="w-full rounded mb-4"
          alt='171x180'
          src={`${config.api_image}${image.name}`}
          />

          
        </Figure>
      </Link>
      <InfoPost
        {...infoPost}
      />
    </article>
    
    
    </>
  );
}
