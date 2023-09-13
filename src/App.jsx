import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'

function App() {

  return (
    <>
 <Header></Header>
 <main className='container mx-auto md:flex justify-between'>
  <Blogs></Blogs>
  <Bookmark></Bookmark>
 </main>
    </>
  )
}

export default App
