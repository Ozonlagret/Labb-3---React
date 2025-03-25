function TodoItem({todo, toggle, removeTodo}) {
    return (
        <div className="todoItem">
            <input 
            type="checkbox"
            checked={todo.completed}
            onChange={() => {toggle(todo.id)}}></input>

            <span id="itemText" className={todo.completed ? 'done' : 'not-done'}>{todo.text}</span>
            <button className="removeButton" onClick={() => removeTodo(todo.id)}>Ta bort</button>
        </div>
    )
}

export default TodoItem;
