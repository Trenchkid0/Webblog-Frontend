import InfoPost from "./InfoPost";
import { Link } from "react-router-dom";
import { config } from '../config'

import { Figure } from "react-bootstrap";

export default function CardPost({ 
    image, 
    ...infoPost 
}) {


  return (
    <article>
        
      <Link href="/detail">
        <Figure>
          <Figure.Image
          width={171}
          height={180}
          alt='171x180'
          src={`${config.api_image}${image.name}`}
          />

          
        </Figure>
      </Link>
      <InfoPost
        {...infoPost}
      />
    </article>
  );
}
