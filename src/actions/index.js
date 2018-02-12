export const increment = (index) => {
    console.log('action')
    const action = {
        type: 'INCREMENT_LIKES',
        payload: index
    }
    return action;
}

export const addComment = (user, text, postId) => {
    const action = {
        type: 'ADD_COMMENT',
        user,
        text,
        postId
        // payload: index
    }
    console.log(action)
    return action;
}

export const removeComment = (index, postId) => {
    const action = {
        type: 'REMOVE_COMMENT',
        index,
        postId
    }
    // console.log(action);
    return action;
}