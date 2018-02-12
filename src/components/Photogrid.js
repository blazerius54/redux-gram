import React, { Component } from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';

// BAcyDyQwcXX
class PhotoGrid extends Component {
  renderPost () {
    return (
      this.props.posts.map((post, index) => {
        return (
            <Photo key={index} index={index} post={post} {...this.props}/>
        )
      })
    )
  }
  render() {
    return (
      <div className="photo-grid">
            {this.renderPost()}
      </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(PhotoGrid);
