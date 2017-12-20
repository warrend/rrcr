export default function posts(state=[], action) {
  switch(action.type) {
    case 'ADD_POST':
      let posts = state
      let id = action.payload.id
      //return posts.concat(action.payload.post)
      return state.concat(action.payload.post)
      
    case 'ADD_COMMENT':
      let post = state[action.payload.id]
      return {
        
          [action.payload.id] : {
            ...post,
            comments : post.comments.concat(action.payload.comment)             
          }            
        
      }
    default: 
      return state
  }
}

// [action.payload.id] : {
//   ...post,
//   comments : post.comments.concat(action.payload.comment)             
// }