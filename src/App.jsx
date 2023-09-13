import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'

function App() {

  return (
    <>
 <Header></Header>
 <main className='container mx-auto flex md:justify-between lg:flex-row flex-col justify-center'>
  <Blogs></Blogs>
  <Bookmark></Bookmark>
 </main>
    </>
  )
}

export default App
