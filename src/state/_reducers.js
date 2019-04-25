const defaultState = {
    events: [],
    todos: [],
    thoughts: [],
    cuser: null,
    token: ""
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "some action type":
            return {
                ...state,
                token: action.token
            };
        case "save events":
            return {
                ...state,
                events: action.events
            };
        default:
            return state;
    }
};

export default reducer;
