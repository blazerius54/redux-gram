import { createStore } from 'redux';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

/*
  Store
  Redux apps have a single store which takes
  1. All Reducers which we combined into `rootReducer`
  2. An optional starting state - similar to React's getInitialState
*/

const defaultState = {
  posts,
  comments
};

// const enhancers = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// );

const store = createStore(rootReducer, defaultState);
// export const history = syncHistoryWithStore(browserHistory, store);
// we export history because we need it in `reduxstagram.js` to feed into <Router>
// export const history = syncHistoryWithStore(browserHistory, store);


export default store;