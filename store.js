import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../components/todoSlice"

const store=configureStore({
    reducer:{
        todos:todosReducer
    }
});

export default store;