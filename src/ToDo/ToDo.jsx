import { useState } from "react";
import { Link } from "react-router-dom";

import profile from '../assets/profile.jpg'


function TodoList() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const handleAddTodo = () => {
    const todoText = todoInput.trim();
    if (todoText !== "") {
      if (todos.includes(todoText)) {
        setError("Item already exists!");
      } else if (todoText.length > 20) {
        setError("Item should be 20 characters or less!");
      } else {
        setTodos([...todos, todoText]);
        setTodoInput("");
        setError("");
      }
    }
  };

  const handleEditTodo = (index) => {
    const newTodo = prompt("Edit ToDo item:", todos[index]);
    if (newTodo && newTodo.trim() !== "") {
      if (todos.includes(newTodo)) {
        setError("Item already exists!");
      } else if (newTodo.length > 20) {
        setError("Item should be 20 characters or less!");
      } else {
        const updatedTodos = [...todos];
        updatedTodos[index] = newTodo;
        setTodos(updatedTodos);
        setError("");
      }
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setError("");
  };

  return (
    <div className="w-3/4 h-screen overflow-y-auto">
                    <div className="grid grid-cols-2 gap-4 bg-gray-800 text-white">
                    <div className="col-span-1 p-4">
                        <p>Your Profile <span className='text-lg'>&gt;</span> <span className='text-red-400 font-semibold text-lg'>ToDo App</span></p>
                    </div>
                    <div className="col-span-1 p-4 flex justify-end">
                        <img src={profile} alt="Profile Image" className="ml-48 w-10 h-8 rounded" />
                        <Link className='px-2 mx-2 w-auto hover:text-cyan-400'to="/">John</Link>|
                        <Link className='px-2 hover:text-cyan-400' to='/'>Settings</Link>|
                        <Link className='px-2 hover:text-cyan-400' to='/'>Notifications</Link>
                    </div>
                </div>
    <div className="bg-blue-900 bg-opacity-80 flex justify-center h-full">
      <div className="container mx-48 my-20 px-10 bg-orange-500 bg-opacity-60">
        <h1 className="text-2xl font-bold mb-4 text-white ml-48">Todo List</h1>
        <input
          type="text"
          className="w-96 border rounded p-2 mb-2"
          placeholder="Enter a task"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
        {error && <p className="text-white mt-2">{error}</p>}
        <ol className="list-inside my-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded mb-4 w-96"
            >
            <p className="text-2xl">
               <span className="font-bold text-2xl text-blue-600"> {index+1+") \t"}</span>{todo}
            </p>
              <button
                className="bg-blue-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2 my-4"
                onClick={() => handleEditTodo(index)}
              >
                Edit
              </button>
              <button
                className="bg-yellow-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
      </div>
    </div>
  );
}

export default TodoList;
