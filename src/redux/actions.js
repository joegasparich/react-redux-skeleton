export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (user, content) => {
    return ({
        type: ADD_MESSAGE,
        message: {
            user,
            content
        }
    });
};
