import { useEffect, useState } from "react"

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
        },[])
  return (
    <div>
      Blogs: {blogs.length}
    </div>
  )
}

export default Blogs
