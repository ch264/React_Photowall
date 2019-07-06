import posts from '../data/posts'


// functions

// Current state always has to be returned by reducer, action that is dispatched
// set state equal to initial value and posts populate state in store
const postReducer = function posts(state = posts, action) {
    // remove photo  action
    console.log(action.index)

    // when action 'REMOVE_POST' gets dispatched, we want to return a state, not modify a state (as opposed to setState)
    switch (action.type) {
        case 'REMOVE_POST': 
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)] // this represents all the elements in state before click on specified index, then returns the state without modifying it, slicing of from index 0 to the specified index
        case 'ADD_POST':
            return [...state, action.post]
        default: 
            return state
    }
    return state;
}

export default postReducer