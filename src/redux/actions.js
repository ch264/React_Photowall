import {database} from '../database/config'

export function startAddingPost(post) {
    return (dispatch) => {
        // update database
        return  database.ref('posts') // returns firebase promise
        .update({[post.id]: post}) // ES6 to update property key
        .then(() => { // after update database dispatch action
            dispatch(addPost(post))
        })
        .catch((err) => { console.log(err) })
    }
}



// tells index in post array, which post to remove
// reducer has to know the type of the action
// action describes to reducer what happened and what needs to change and reducer goes and does it

// wrap object in functions to make them portable 
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index: index // index of post
        // index
    }
}

// adding posts
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post: post // post submited by form is the payload
        // post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}