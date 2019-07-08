import React, {Component} from 'react';
import Photo from './Photo';
import Comments from './Comments'

class Single extends Component {
    render() {
        // match is an object that comes from params
        console.log('match', this.props.match.params.id);
        // we can access match and posts directly
        const {match, posts} = this.props
        // turn id into number to perform boolean check on the same type
        const id = Number(match.params.id);
        // gives us the post we want to display
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments;
        console.log(post)

        return (
            <div className='single-photo'>
                {/* components are reusable so pass in Photo */}
                <Photo post={post}/>
                <Comments addComment={this.props.addComment} comments={comments} id={id}/>
            </div>
        )
    }
}

export default Single 