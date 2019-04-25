import { createStore } from "redux";
import rootReducer from "./_reducers.js";

const store = createStore(rootReducer);

export default store;
