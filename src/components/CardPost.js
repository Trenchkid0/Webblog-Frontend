import InfoPost from "./InfoPost";
import { config } from '../config'

import { Figure } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CardPost({ 
  _id,
    image, 
    ...infoPost 
}) {
  const navigate = useNavigate()
  return (
    <>
    <article>
        
      <li className="list-none cursor-pointer " onClick={()=>navigate(`/detail/${_id}`)}>
        <Figure>
          <Figure.Image
          className="w-full rounded mb-4"
          alt='171x180'
          src={`${config.api_image}${image.name}`}
          />

          
        </Figure>
      </li>
      <InfoPost
        blogId={_id}
        {...infoPost}
      />
    </article>
    
    
    </>
  );
}
