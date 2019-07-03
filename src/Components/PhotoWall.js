import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'

// stateless functional component accesses the props through argument and not the component instance itself. Therefore we can remove the this keyword

function PhotoWall(props) {
    // all elements needs to be wrapped in divs
    return (
        <div>
            {/* <a className='addIcon' onClick={props.onNavigate} href="#AddPhoto">Click me</a> */}
            <button onClick={props.onNavigate} className='addIcon'> </button>
            <div className="photoGrid">
                {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
            </div>
        </div>
    )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired, // if no components are passed in, error
    onRemovePhoto: PropTypes.func.isRequired // needed for functionality
}

export default PhotoWall