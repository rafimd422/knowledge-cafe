import PropTypes from 'prop-types'; 


const Blog = ({blog}) => {
  return (
    <div>
      <h3>Blog is here</h3>
    </div>
  )
}

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog
