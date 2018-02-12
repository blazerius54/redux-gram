import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { increment } from '../actions/index'

class Photo extends Component {

  // foo(i) {
    // alert('s')
  //   this.props.increment(i)
  //   console.log(i)
  // }

  render() {
    const { post, index, comments, increment} = this.props;
    return (
      <figure className="single-photo">
        <Link to={`/view/${post.code}`}>
          <img src={post.display_src} alt=""/>
        </Link>
        <figcaption>
          <p>{post.caption}</p>
          <div className='btn-container'>
            <div>
                          
              <button
              onClick={()=>increment(index)}
              // onClick={()=>this.foo(index)}
              className='likes'
              >
              &hearts; {post.likes}
              </button>

            </div>  
            <div>
              <Link to={`/view/${post.code}`}>
                <span className="comment-count">
                  {comments[post.code] ? comments[post.code].length : 0 }
                </span>
              </Link>            
            </div>
          </div>
        </figcaption>
      </figure>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ increment }, dispatch)
}

export default connect(null, mapDispatchToProps)(Photo);
