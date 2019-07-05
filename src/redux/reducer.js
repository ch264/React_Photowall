import posts from '../data/posts'


// functions

// Current state always has to be returned by reducer, action that is dispatched
// set state equal to initial value and posts populate state in store
const postReducer = function posts(state = posts, action) {
    // remove photo  action
    console.log(action.index)
    return state;
}

export default postReducer