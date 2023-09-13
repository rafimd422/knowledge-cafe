import React from 'react'

const Bookmarks = ({Bookmark}) => {
  return (
    <div className='text-neutral-900 text-lg font-semibold bg-white mb-3 p-2'>
      {Bookmark.title}
    </div>
  )
}



export default Bookmarks
