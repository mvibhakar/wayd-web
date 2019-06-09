import {
    SAVE_EVENTS,
    SAVE_TODOS,
    SAVE_THOUGHTS,
    CUSER,
    TOKEN
} from "./_actionTypes";

const defaultState = {
    events: [],
    todos: [],
    thoughts: [],
    cuser: null,
    token: ""
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_EVENTS:
            return {
                ...state,
                events: action.events
            };
        case SAVE_TODOS:
            return {
                ...state,
                todos: action.todos
            };
        case SAVE_THOUGHTS:
            return {
                ...state,
                thoughts: action.thoughts
            };
        case CUSER:
            return {
                ...state,
                cuser: action.cuser
            };
        case TOKEN:
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
};

export default reducer;
