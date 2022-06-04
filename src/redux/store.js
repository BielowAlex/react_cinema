import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer, userReducer} from "./slice";

const rootReducer = combineReducers({
    movies:moviesReducer,
    user:userReducer
});


const store = configureStore({
    reducer:rootReducer
});


export {
    store
}