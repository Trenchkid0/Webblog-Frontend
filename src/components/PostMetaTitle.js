import { formatDate } from '../utils/formatDate';

export default function PostMetaTitle({ topic,date,title}) {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-4">
        <div className="uppercase">
          {title}
        </div>
        <span>&bull;</span>
        <div>
        {formatDate(date)}
        </div>
      </div>
      {/* <h2 className={`text-2xl mt-4 ${center ? 'text-center' : ''}`}> */}
        {/* <Link href="/detail"><a>{title}</a></Link> */}
      {/* </h2> */}
    </>
  );
}
