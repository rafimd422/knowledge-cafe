import './App.css';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmark from './components/Bookmark/Bookmark';
import { useState } from 'react';

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [mark, setMark] = useState(0);

  const markAsRead = (blog) => {
    const total = mark + blog;
    setMark(total);
  };

  const handleBookmark = (blog) => {
    console.log({ bookmark });

    let found = false;
    bookmark.forEach((ele) => {
      if (ele.id === blog.id) found = true;
    });

    if (found) {
      const temp = bookmark.filter((ele) => ele.id !== blog.id);
      setBookmark(temp);
    } else {
      const addBookmark = [...bookmark, blog];
      setBookmark(addBookmark);
    }
  };

  return (
    <>
      <Header />
      <main className='container mx-auto flex md:justify-between lg:flex-row flex-col justify-center'>
        <Blogs handleBookmark={handleBookmark} markAsRead={markAsRead} />
        <Bookmark key={bookmark.id} mark={mark} setBookmark={bookmark} />
      </main>
    </>
  );
}

export default App;
