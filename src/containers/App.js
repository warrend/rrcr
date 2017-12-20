import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import Board from './Board'
import PostForm from './PostForm'
import SinglePost from '../components/SinglePost'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="App-title">Message Board</h1>
        </header>
        <div>
          <Router>
            <div>
              <Route exact path="/" render={props => <Board posts={this.props.posts} />} />
              <Route exact path="/new" component={PostForm} />
              <Route exact path="/posts/:id" component={SinglePost} />
            </div>
          </Router>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(App)
