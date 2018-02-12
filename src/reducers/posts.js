function posts(state = [], action) {
  let newState = [...state];
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      newState[action.payload].likes ++;
      console.log('reducer', action)
      return newState;
    default:
      return state;
  }
}
  
  export default posts;