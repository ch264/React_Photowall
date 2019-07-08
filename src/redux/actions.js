import {database} from '../database/config'

// performs asynchronous calls to fetch and update data in database with Redux
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

// grabs all posts from database
export function startLoadingPosts() {
    return (dispatch) => {
        return database.ref('posts') // access the reference posts node
        .once('value') // (.on() listen for changes in database to invoke function in realtime (.once() for invoking)
        .then((snapshot) => { //snapshot contains all children in node in firebase
            let posts = [];
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts)) // dispatching goes straight to reducer where it can be manipulated
        })
        .catch((err) => { console.log(err) })
    }
}

// loads posts to render in UI
export function loadPosts(posts) {
    return {
        type:'LOAD_POSTS',
        posts
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

export function startRemovingPost(index, id) {
     /* this specifies the paths that we want to update to null (basically delete) we're navigating to the post with id we clicked remove on, as well as the comments belonging to that post, with that same id. */ 

    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
    }
   
    /*finally, we're updating the database from its root node, such that it navigates to the posts path, as well as the comments path, and  sets them to null ! (in other words,deletes both of them). After deleting the post and its comments from the database, like always, we're updating the ui by dispatching an action to our reducer inside of .then() */ 
    return (dispatch) => {
        return database
        .ref()
        .update(updates)
        .then(() => {
            dispatch(removePost(index))
        })
        .catch((err) => { console.log(err) })
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

export function startAddingComment(comment, postId) {
    return (dispatch) => {
        return database
        .ref(`comments/${postId}`)
        .push(comment)
        .then(() => {
            dispatch(addComment(comment, postId))
        })
        .catch((err) => { console.log(err) })
    }
}

// on componentdidmount we call this function and load comments into object with key 
export function startLoadingComments() {
    return (dispatch) => {
        return database
        .ref('comments')
        .once('value')
        .then((snapshot) => { 
            let comments = {}; // dump values as object 
            snapshot.forEach((childSnapshot) => {
                // each key represents post.id that has a set of comments
                comments[childSnapshot.key] = Object.values(childSnapshot.val()); 
            })
            dispatch(loadComments(comments))
        })
        .catch((err) => { console.log(err) })
    }
}

// once we have all data in object we dispatch an action that populates our store with that data inside the reducer, rerendering our UI
export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}