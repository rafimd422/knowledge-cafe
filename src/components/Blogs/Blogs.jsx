import { useEffect, useState } from "react"
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
        },[])
  return (
    <div>
      <h1 className="text-3xl">Blogs: {blogs.length}</h1>
      {blogs.map(blog=> 
      <Blog 
      key={blog.id}
       blog={blog}>
       </Blog>)}
    </div>
  )
} 

export default Blogs
