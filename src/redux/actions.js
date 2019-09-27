export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (content) => {
    return({
        type: ADD_MESSAGE,
        message: {
            content
        }
    });
}