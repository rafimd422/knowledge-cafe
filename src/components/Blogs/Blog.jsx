import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/bs'; // Use 'react-icons/bs' for Bootstrap Icons

const Blog = ({ blog }) => {
  const { cover, author_img, author, posted_date, reading_time, title, hashtags } = blog;
  
  return (
    <div className='my-10 xl:w-full'>
      <img className='mb-4 rounded-lg md:w-full md:h-full' src={cover} alt="" />
      <div className="my-2 flex justify-between items-center">
        <div className='flex gap-4 items-center w-full'>
          <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
          <div>
            <h3 className='text-neutral-900 text-2xl font-bold leading-10'>{author}</h3>
            <p className='text-neutral-900 text-opacity-60 text-base font-semibold leading-relaxed'>{posted_date}</p>
          </div>
        </div>
        
        <span style={{ whiteSpace: 'nowrap'}} className='text-neutral-900 text-opacity-60 font-medium me-2'>{reading_time} min read <button><BsBookmark /></button> </span>

      </div>
      <h1 className='text-neutral-900 text-3xl font-bold my-4'>{title}</h1>
      {hashtags.map((hash, idx) => <span style={{ whiteSpace: 'nowrap' }} className='me-6 text-neutral-900 text-opacity-60 text-lg font-medium' key={idx}>#{hash}</span>)}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
