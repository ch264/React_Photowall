import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'

// stateless functional component accesses the props through argument and not the component instance itself. Therefore we can remove the this keyword

function PhotoWall(props) {
    return <div className="photoGrid">
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
        </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired, // if no components are passed in, error
    onRemovePhoto: PropTypes.func.isRequired // needed for functionality
}

export default PhotoWall