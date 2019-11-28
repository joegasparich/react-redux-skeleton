import { ADD_MESSAGE } from './actions';

const initialState = {
    messages: [],
    users: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_MESSAGE:
        return {
            ...state,
            messages: state.messages.concat(action.message)
        };
    default:
        return state;
    }
};

export default reducer;
