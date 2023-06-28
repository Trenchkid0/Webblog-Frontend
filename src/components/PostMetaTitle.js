import { formatDate } from '../utils/formatDate';
import { Link } from 'react-router-dom';

export default function PostMetaTitle({ topic,date,title}) {
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
        <Link href="/detail" className='text-white font-small no-underline'>{title}</Link>
      </h2>
    </>
  );
}
