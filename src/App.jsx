import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import { useState } from 'react'

function App() {
const [bookmark, setBookmark] = useState([])

const handleBookmark = (blog) =>{
const addBookmark = [...bookmark, blog]
setBookmark(addBookmark)
console.log(addBookmark)
}
  return (
    <>
 <Header></Header>
 <main className='container mx-auto flex md:justify-between lg:flex-row flex-col justify-center'>
  <Blogs handleBookmark={handleBookmark}></Blogs>
  <Bookmark key={bookmark.id} setBookmark ={bookmark}></Bookmark>
 </main>
    </>
  )
}

export default App
