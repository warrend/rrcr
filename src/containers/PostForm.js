import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/postActions'
import dateFormat from 'dateformat'
import './PostForm.css'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      user: '', 
      date: this.createDate(),
      comments: []
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
    this.props.actions.addPost(this.state, this.props.history, this.props.posts.length)
  }

  render() {
    return (
      <div>
        <h1>Add a New Posting</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.handleChange} name="title" />
        </label>
        <label>
          Description:
          <textarea value={this.state.description} onChange={this.handleChange} name="description" />
        </label>
        <label>
          Posted By:
          <input type="text" value={this.state.user} onChange={this.handleChange} name="user" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)