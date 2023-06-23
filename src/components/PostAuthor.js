import { config } from '../config'
import { Image } from 'react-bootstrap';

export default function PostAuthor({
    partcipant
  }) {
    return (
      <div className="flex items-center mt-5">
        <Image src={`${config.api_image}${partcipant.image.name}`} className="w-14 h-14 rounded-full object-cover" />
        <div className="ml-4">
          <h3>{partcipant.firstName}</h3>
          <div className="text-white/60 text-sm mt-1">
            {partcipant.role}
          </div>
        </div>
      </div>
    );
  }
  