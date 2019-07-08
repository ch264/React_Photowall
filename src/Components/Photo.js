import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Photo(props) {
    const post = props.post
    // add curly braces to add javascript dot notation
    return <figure className="figure">
        {/* pass in post id as a parameter */}
        <Link to={`single/${post.id}`}> 
            <img className="photo" src={post.imageLink} alt={post.description} />
        </Link>
        <figcaption><p>{post.description}</p></figcaption> 
        <div className="button-container">
            {/* call the method onRemovePhoto that was passed down as a prop */}
            <button className="remove-button" onClick = {() => {
                // props.onRemovePhoto(post) // pass in post, which is postRemoved argument
                props.removePost(props.index);
                props.history.push('/')
            }} >Remove</button>

            {/* counts the number of comments on a picture */}
            <Link className="button" to={`single/${post.id}`}>
                <div className="comment-count">
                    <div className="speech-bubble"></div>
                    {/* if the comment has a value  */}
                    {props.comments[post.id] ? props.comments[post.id].length : 0} 
                </div>
            </Link>
        </div>
    </figure>
}


Photo.propTypes = {
    post: PropTypes.object.isRequired
    // onRemovePhoto: PropTypes.func.isRequired // function that comes along with props
}

export default Photo