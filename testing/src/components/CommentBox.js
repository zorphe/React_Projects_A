import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component{
    state = { comment: "" };

    handleChange = (evt) => {
        this.setState({ comment: evt.target.value });
    }

    formSubmit = (evt) => {
        evt.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({ comment: '' });
    }

    render(){
        return (
            <form onSubmit={ this.formSubmit }>
                <h4> Add a comment </h4>
                <textarea onChange= { this.handleChange } value={ this.state.comment }/>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

export default connect(
    null, 
    actions
)(CommentBox);