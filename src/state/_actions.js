import {
    SAVE_EVENTS,
    SAVE_TODOS,
    SAVE_THOUGHTS,
    CUSER,
    TOKEN
} from "./_actionTypes";

export const saveEventsToState = events => {
    return {
        type: SAVE_EVENTS,
        events
    };
};

export const saveToDosToState = todos => {
    return {
        type: SAVE_TODOS,
        todos
    };
};

export const saveThoughtsToState = thoughts => {
    return {
        type: SAVE_THOUGHTS,
        thoughts
    };
};

export const setCuser = cuser => {
    return {
        type: CUSER,
        cuser
    };
};

export const setToken = token => {
    if (!token) {
        localStorage.removeItem("token");
    } else {
        localStorage.setItem("token", token);
        return {
            type: TOKEN,
            token
        };
    }
};
