import PostMetaTitle from '../components/PostMetaTitle';
import PostAuthor from '../components/PostAuthor';

export default function InfoPost({
  blogId,
  topic,
  date,
  title,
  deskripsi,
  participant,
  createdAt,
}) {
  return (
    <>
      <PostMetaTitle 
        topic={topic} 
        date={createdAt}
        title={title}
        blogId={blogId}
      />
      <p className="text-white/60 mt-5 w-10/12">
        {deskripsi}
      </p>
      <PostAuthor
        partcipant={participant}
      />
    </>
  );
}
