import React, { Component } from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';
import Comments from './comments';

class Single extends Component {
    
    
    render() {
        const postId = this.props.match.params.postId;
        const index = this.props.posts.findIndex((post) =>
            postId === post.code
        );
        const post = this.props.posts[index];

        const comments = this.props.comments[postId]

        return (
            <div>
                <div className="single-photo-comments">
                    <Photo index={index} post={post} {...this.props}/>
                    <Comments comments={comments} postId={postId}/>
                </div>
            </div>
        )
    }
}
 



function mapStateToProps (state) {
    return {
      posts: state.posts,
      comments: state.comments
    }
  }
  
  export default connect(mapStateToProps)(Single);
  