import { createContext, useContext, useState } from "react";

// Create a Context
const TodoContext = createContext();

// Custom hook to use TodoContext
export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        try {
          const savedTodos = JSON.parse(localStorage.getItem("todoList"));
          return Array.isArray(savedTodos) ? savedTodos : [];
        } catch (error) {
          console.error("Failed to parse todos from localStorage:", error);
          return [];
        }
      });
      
console.log(todos,"context")
  // Add a new todo
  const addTodo = (name, desc) => {
    const newTodo = {
      id: Date.now(), // Replace with a better ID generator if needed
      name,
      desc,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todoList", JSON.stringify(updatedTodos));
  };

  // Edit an existing todo
  const editTodo = (id, updatedName, updatedDesc) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, name: updatedName, desc: updatedDesc }
        : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todoList", JSON.stringify(updatedTodos));
  };

  // Delete a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todoList", JSON.stringify(updatedTodos));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
