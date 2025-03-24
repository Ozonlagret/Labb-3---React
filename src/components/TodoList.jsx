import React, {useState, useEffect} from "react";
import TodoInput from './TodoInput.jsx'
import TodoItem from './TodoItem.jsx'

function TodoList() {

    const storedTodos = JSON.parse(localStorage.getItem('todos'))

    const [todos, setTodos] = useState(storedTodos);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
    function AddTodo(text) {
      const newTodo = { id: Date.now(), text, completed: false };
      setTodos([...todos, newTodo]);
    };
    
    function RemoveTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    
    function Toggle(id) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

    return (
      <div className="todoList">
        <h1 className="todoText">To-Dos</h1>
        <TodoInput addTodo={AddTodo} />

        <div>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggle={Toggle} removeTodo={RemoveTodo} />
          ))}
        </div>

      </div>
    );
  }

export default TodoList;