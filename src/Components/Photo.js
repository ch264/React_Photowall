import React, {Component} from 'react';

class Photo extends Component {
    // this refers to the component instance that passes in the props
    render() {
        const post = this.props.post
        return <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description} /> 
        </figure>
    }
}

export default Photo