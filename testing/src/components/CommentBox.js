import React from 'react';

class CommentBox extends React.Component{
    state = { comment: "" };

    handleChange = (evt) => {
        this.setState({ comment: evt.target.value });
    }

    formSubmit = (evt) => {
        evt.preventDefault();

        // TODO: call action creator, and save comment

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

export default CommentBox;