import React, {Component} from 'react';

class Photo extends Component {
    // this refers to the component instance that passes in the props
    render() {
        const post = this.props.post
        // add curly braces to add javascript dot notation
        return <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description} />
            <figcaption><p>{post.description}</p></figcaption> 
            <div className="button-container">
                <button className="remove-button">Remove</button>
            </div>

        </figure>
    }
}

export default Photo