import { formatDate } from '../utils/formatDate';
import { useNavigate } from 'react-router-dom';

export default function PostMetaTitle({ topic,date,title,blogId}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center text-white/60 space-x-2">
        <div className="uppercase">
          {topic}
        </div>
        
        <span>&bull;</span>
        <div>
        {formatDate(date)}
        </div>
      </div>
      <h2 className={'text-2xl mt-4'}>
        <li onClick={()=>navigate(`/detail/${blogId}`)} className='text-white font-small no-underline list-none cursor-pointer'>{title}</li>
      </h2>
    </>
  );
}
