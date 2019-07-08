import React, {Component} from 'react';
import Photo from './Photo';
import Comments from './Comments'

class Single extends Component {
    render() {
        // match is an object that comes from params
        // console.log('match', this.props.match.params.id);
        // we can access match and posts directly
        const {match, posts} = this.props
        // turn id into number to perform boolean check on the same type
        const id = Number(match.params.id);
        // gives us the post we want to display
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments[match.params.id] || [];
        const index = this.props.posts.findIndex((post) => post.id === id)
        // console.log(post)
        if (this.props.loading === true) {
            return (
                <div className="loader">
                    ....loading
                </div>
            )
        } else {
            return (
                <div className='single-photo'>
                    {/* components are reusable so pass in Photo */}
                    <Photo post={post} {...this.props} index={index}/>
                    <Comments startAddingComment={this.props.startAddingComment} comments={comments} id={id}/>
                </div>
            )
        }
        
    }
}

export default Single 