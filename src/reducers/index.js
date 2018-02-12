// import { routerReducer } from 'react-router'; // we need this for react-router
import posts from './posts';
import comments from './comments';
import {combineReducers} from 'redux';

// Combine all our reducers togeher
const rootReducer = combineReducers({ posts, comments });

export default rootReducer;