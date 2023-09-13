import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
  }, []);

  return (
    <div className="mx-8">
      {blogs.map(blog => (
        <Blog bookmark={handleBookmark} 
        key={blog.id} 
        blog={blog}></Blog>
      ))}
    </div>
  );
};


Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
};

export default Blogs;
