import React, {Component} from 'react';
import Photo from './Photo';

class PhotoWall extends Component {
    render() {
        // access each post as prop
        // map through posts and for each instance we generate photo instance from each post
        return <div>
            {this.props.posts.map((post, index) => <Photo key={index} prop={post}/>)} 
        </div>
    }
}

export default PhotoWall