// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import {increment} from './actions/index';
import Main from './components/Main';
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
      posts: state.posts,
      comments: state.comments
  }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators(increment,
//         dispatch);
// }

const App = connect(mapStateToProps,
  null)(Main);

export default App;