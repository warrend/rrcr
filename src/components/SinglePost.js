import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/postActions'
import dateFormat from 'dateformat'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import './SinglePost.css'
import Board from '../containers/Board'

class SinglePost extends Component {
  constructor() {
    super();

    this.state = {
      replyUser: '',
      replyMessage: '',
      date: ''
    }
  }

  createDate() {
    let now = new Date()
    return dateFormat(now, "m/d/yy @h:MMtt")
  }
  
  handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value

		this.setState({
			[name]: value
		})
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const id = this.props.match.params.id
    this.props.actions.addComment(this.state, id)
  }

  render() {
    const style = {paddingLeft: '10px;'}
    const id = this.props.match.params.id
    const post = this.props.posts[id]
    return (
      <div className="single-post">
        <button className="button"><Link to={{pathname: '/'}}>Back to Posts</Link></button>
        <p className="post-header">{post.title}</p>
        <p>By: {post.user} On: {post.date}</p>
        <p>{post.description}</p>
        {post.comments.length > 0 ? 
          <div className="responses">
              {post.comments.map((comment, key) => {
                return (
                <div className="post">
                  <p>{comment.replyMessage}</p>
                  <p>{comment.replyUser}</p>
                </div>
                )
              })}
          </div>
        : <p>There are no comments yet!</p>}
        <form onSubmit={this.handleSubmit}>
          <label>
            Reply Message:
            <textarea value={this.state.replyMessage} onChange={this.handleChange} name="replyMessage" />
          </label>
          <label>
            Reply User:
            <input type="text" value={this.state.replyUser} onChange={this.handleChange} name="replyUser" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost)