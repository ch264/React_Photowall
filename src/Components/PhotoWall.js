import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// stateless functional component accesses the props through argument and not the component instance itself. Therefore we can remove the this keyword

function PhotoWall(props) {
    // all elements need to be wrapped in divs
    return (
        <div>
            <Link className='addIcon' to="/AddPhoto"> </Link>
            <div className="photoGrid">
                {props.posts
                    .sort(function(x, y) {
                        return y.id - x.id
                    })
                    .map((post, index) => <Photo key={index} post={post} {...props} index={index} />)}
            </div>
        </div>
    )
}

// we will dispatch an action that will go to reducer that updates the state, no more methods to update the state
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired // if no components are passed in, error
    // onRemovePhoto: PropTypes.func.isRequired // needed for functionality
}

export default PhotoWall