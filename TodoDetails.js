import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTodoContext } from './TodoContext';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from './todoSlice';

const TodoDetails = () => {
  const { id } = useParams();
//   const { todos, editTodo } = useTodoContext();
const todos=useSelector((state)=>state.todos.todos);
const dispatch=useDispatch();
  const todo = todos.find((t) => t.id === parseInt(id));
  const navigate = useNavigate();

  // Local state to manage editing
//   const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo?.name || '');
  const [editedDesc, setEditedDesc] = useState(todo?.desc || '');

//   const handleEditToggle = () => {
//     setIsEditing(true);
//   };

  const handleSave = () => {
    if (editedName.trim() && editedDesc.trim()) {
      dispatch(editTodo({id:todo.id,name: editedName, desc:editedDesc})); // Update the context
    //   setIsEditing(false); // Disable editing mode
    navigate('/')
    } else {
      alert('Name and Description cannot be empty!');
    }
  };

  if (!todo) return <p>Todo not found!</p>;

  return (
    <>
      <div>
        <h2>Todo Details</h2>
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            placeholder="Edit name"
          />
          <textarea
            value={editedDesc}
            onChange={(e) => setEditedDesc(e.target.value)}
            placeholder="Edit description"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => navigate('/')}>Back</button>
        </div>
      </div>
    </>
  );
};

export default TodoDetails;
