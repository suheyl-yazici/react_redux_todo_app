import {createStore , combineReducers} from "redux";
import todoReducer from "./reducer/todoReducer";


const reducers = combineReducers({
    todoReducer : todoReducer
});


export const myStore = createStore(reducers);