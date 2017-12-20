export function addPost(post, history, id) {
  return function(dispatch) {
    dispatch({type: 'ADD_POST', payload: {post, id}})
    history.push("/")
  }
}

export function addComment(comment, id) {
  return function(dispatch) {
    dispatch({type: 'ADD_COMMENT', payload: {comment, id}})
  }
}