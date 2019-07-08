import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Photo(props) {
    const post = props.post
    // add curly braces to add javascript dot notation
    return <figure className="figure">
        <Link to={`single/${post.id}`}> 
            <img className="photo" src={post.imageLink} alt={post.description} />
        </Link>
        <figcaption><p>{post.description}</p></figcaption> 
        <div className="button-container">
            {/* call the method onRemovePhoto that was passed down as a prop */}
            <button className="remove-button" onClick = {() => {
                // props.onRemovePhoto(post) // pass in post, which is postRemoved argument
                props.removePost(props.index);
            }} >Remove</button>
        </div>
    </figure>
}


Photo.propTypes = {
    post: PropTypes.object.isRequired
    // onRemovePhoto: PropTypes.func.isRequired // function that comes along with props
}

export default Photo