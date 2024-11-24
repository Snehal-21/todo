import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:JSON.parse(localStorage.getItem('todoList')) || []
};

const todoSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo=action.payload;
            state.todos.push(newTodo);
            localStorage.setItem('todoList',JSON.stringify(state.todos));
        },
        editTodo:(state,action)=>{
            const {id,name,desc}=action.payload;
            const index=state.todos.findIndex((todo)=>todo.id===id);
            if(index!==-1){
                state.todos[index]={...state.todos[index],name,desc};
                localStorage.setItem('todoList',JSON.stringify(state.todos));
            }
        },
        deleteTodo:(state,action)=>{
            const id=action.payload;
            state.todos=state.todos.filter((todo)=>todo.id!==id);
            localStorage.setItem('todoList',JSON.stringify(state.todos));
        }
    }
});

export const {addTodo,editTodo,deleteTodo}=todoSlice.actions;

export default todoSlice.reducer;