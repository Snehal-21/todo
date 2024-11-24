import React, { useState } from 'react'
import { useTodoContext } from './TodoContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './todoSlice';


const Todo = () => {
  // const {todos,addTodo,deleteTodo}= useTodoContext();
  const todos=useSelector((state)=>state.todos.todos);
  const dispatch=useDispatch();
  const [textValue,setTextValue]=useState("");
  const [todoDesc,setTodoDesc]=useState("")
  const navigate=useNavigate();
  console.log(todos,"todos")
  const  handleAddTodo=() =>{
    if(textValue){
      // addTodo(textValue,todoDesc);
      // setTextValue("");
      // setTodoDesc("");

      const newTodo={
        id:Date.now(),
        name:textValue,
        desc:todoDesc
      };
      dispatch(addTodo(newTodo));
      setTextValue("");
      setTodoDesc("");

  }
};


  return (
    <>
    <div style={{width:"100%",border:"1px solid black"}}> 
        <div>
          <input 
          type="text" 
          value={textValue} 
          onChange={(e)=>setTextValue(e.target.value)}
          placeholder="Enter a todo name" />
          <textarea 
            type="text"
            value={todoDesc}
            onChange={(e)=>setTodoDesc(e.target.value)}
            placeholder='Enter todo description'
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    </div>
    <div>
      {todos && <>
        {todos?.map((todo)=>(
      <li key={todo.id}>
        <span
         style={{ cursor: 'pointer', color: 'blue' }}
          onClick={()=>navigate(`/todo/${todo.id}`)}>{todo?.name}</span>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      </li>
     ))}
      </>}
     
    </div>
    </>
  )
}

export default Todo