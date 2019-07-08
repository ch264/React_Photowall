import _posts from '../data/posts'
import { combineReducers } from 'redux';

// functions

// Current state always has to be returned by reducer, action that is dispatched
// set state equal to initial value and posts populate state in store
function posts(state = _posts, action) {
    // remove photo  action
    // console.log(action.index)
    // console.log('posts reducer')

    // when action 'REMOVE_POST' gets dispatched, we want to return a state, not modify a state (as opposed to setState)
    switch (action.type) {
        case 'REMOVE_POST': 
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)] // this represents all the elements in state before click on specified index, then returns the state without modifying it, slicing of from index 0 to the specified index
        case 'ADD_POST':
            return [...state, action.post]
        case 'LOAD_POSTS':
            return action.posts // return payload that is passed into it by dispatch method
        default: 
            return state
    }
    // return state;
}

// const commentReducer = function comments(state=[], action) {
//     return state
// }
function comments(state={}, action) {
    // console.log('comments reducer')
    switch (action.type) {
        case 'ADD_COMMENT' : // add comment to current state
            if (!state[action.postId]){ // if there is no value
                return {...state, [action.postId]: [action.comment]} // specify id as property of an object using []. action.postId is not an array. action.comment is an array! 
            } else {
                return {...state, [action.postId]: [...state[action.postId], action.comment]} // add comments to current array
            }
        case 'LOAD_COMMENTS':
            return action.comments
        default: 
            return state
    }
    // return state
}

// combine reducers into one reducer and pass that into the store.
const rootReducer = combineReducers({ posts, comments })

export default rootReducer