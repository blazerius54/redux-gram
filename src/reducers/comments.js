// function postComments (state = [], action) {
//     switch(action.type) {
//       case 'ADD_COMMENT':
//         return [...state, {
//           user : action.user,
//           text : action.text
//         }];
//       case 'REMOVE_COMMENT':
//         console.log(action)
//         return [
//           ...state.slice(0, action.index),
//           ...state.slice(action.index + 1)
//         ];
//       default:
//         return state;
//     }
//   }
  
//   function comments (state = {}, action) {
//     // if (typeof action.postId !== 'undefined') {
//       return {
//         // Take the current state
//         ...state,
//         // overwrite this post with the new one
//         [action.postId]: postComments(state[action.postId], action)
//       };
//     // }
  
//     // return state;
//   }
  
//   export default comments;

function comments (state = [], action) {
  let comments = state;
  switch (action.type) {
    case 'REMOVE_COMMENT':
      console.log(comments[action.postId])
      comments[action.postId] = delComment(comments[action.postId], action.index);
      console.log(comments[action.postId])
    default:
      return state
  }

}

function delComment (state= [], index) {
  let comments = state;
  comments = comments.filter((item, i) => {return i!==index})
  console.log(state)
  return comments
}

export default comments