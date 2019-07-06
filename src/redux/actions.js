
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