import React, {Component} from 'react';
import Photo from './Photo';

class PhotoWall extends Component {
    render() {
        // access each post as prop
        // map through posts and for each instance we generate photo instance from each post
        // pass className as an attribute to add css styles
        return <div className="photoGrid">
            {this.props.posts.map((post, index) => <Photo key={index} post={post} />)}
        </div>
    }
}

export default PhotoWall