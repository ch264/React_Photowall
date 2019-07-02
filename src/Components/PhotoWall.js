import React from 'react';
import Photo from './Photo';

// stateless functional component accesses the props through argument and not the component instance itself. Therefore we can remove the this keyword

function PhotoWall(props) {
    return <div className="photoGrid">
            {props.posts.map((post, index) => <Photo key={index} post={post} />)}
        </div>
}


export default PhotoWall