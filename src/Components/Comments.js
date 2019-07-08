import React, { Component } from 'react'; 

class Comments extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(e.target.elements.comment.value)
        const comment = e.target.elements.comment.value;
        // call the addComment method from the props that are passed dwn 
        this.props.startAddingComment(comment, this.props.id);
        e.target.elements.comment.value = ''; // empty comment field once submitted
    }

    render() {
        // console.log(this.props.comments)
        return (
            <div className="comment">
                {
                    this.props.comments.map((comment, index) => {
                    return (
                        <p key={index}> { comment }</p>
                        )
                    })
                }
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="comment" name="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}

export default Comments