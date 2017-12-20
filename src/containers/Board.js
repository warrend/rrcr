import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './board.css'

class Board extends Component {
  render() {
    const posts = this.props.posts
    console.log(posts)
    return (
      <div className="posts-container">
        {posts.length > 0 ? 
        <div className="posts">
        {posts.map((post, key) => {
          return (
            <div key={key} data-id={key} className="post">
              <Link to={"/posts/" + key}><p className="post-header truncate">{post.title} {post.description}</p></Link>
              <p>Posted By: {post.user} | {post.comments.length} Comments  <span>{post.date}</span></p>
            </div>
          )
        })}
        </div> : <div className="posts">No job postings yet!</div>}
        <button className="button"><Link to="/new">Add New Post</Link></button>
      </div>
    );
  }
}

export default Board