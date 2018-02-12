import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment, removeComment } from '../actions/index';

class Comments extends Component {
    constructor (props) {
        super (props) 
        this.state = {
            user: '',
            text: '',
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
        this.props.addComment(this.state.user, this.state.text, this.props.postId);
        this.setState({
            user: '',
            text: ''
        })
        this.text.value = '';
        this.user.value = '';
    }

    handleRemove (index) {
        alert('s')
        this.props.removeComment.bind(null, index)
    }

    renderComment () {
        return (
            this.props.comments.map((comment, i) => {
                return (
                    <div key={i} className="comment-container">
                        <p className='user'>{comment.user}: </p>
                        <p className='comment-text'>{comment.text}</p>
                        <button
                        onClick={this.props.removeComment.bind(null, i, this.props.postId)}
                        className="remove-comment">&times;</button>
                    </div>
                )
            })
        )
    }

    renderInputs () {
        return (
            <div className="input-controls">
                <div className="inputs">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input type="text" 
                        ref={(ref=>{this.user = ref})}
                        onChange={(e)=>{this.setState({user: e.target.value})}}
                        />
                        <input type="text" 
                        ref={(ref=>{this.text = ref})}
                        onChange={(e)=>{this.setState({text: e.target.value})}}
                        />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }
    
    render () {

        return (
            <div className="comments-container">
                {this.props.comments? this.renderComment(): <p>No comments yet</p> };
                {this.renderInputs()}
            </div>
        )
    }
}
 
function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addComment, removeComment }, dispatch)
}

export default connect(null, mapDispatchToProps)(Comments);