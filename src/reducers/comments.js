function comments (state = [], action) {
  let oneComment = null;
  switch (action.type) {
    case 'REMOVE_COMMENT':
      oneComment = delComment(state[action.postId], action.index);
      console.log(oneComment)
      return {
        ...state,
        [action.postId]: oneComment
      };
    case 'ADD_COMMENT': 
      return {
        ...state,
        [action.postId]: addComment(state[action.postId], action)
      }
      
    default:
      return state
    }

  }
function addComment(state = [], action) {
  console.log(action)
  return [
    ...state,
    {
      text: action.text,
      user: action.user
    }
  ]
}

function delComment (state= [], index) {
  let comments = state;
  comments = comments.filter((item, i) => {return i!==index})
  console.log(state)
  return comments
}

export default comments