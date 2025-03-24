function TodoItem({todo, toggle, removeTodo}) {
    return (
        <div>
            <span onClick ={() => toggle(todo.id)}
                className={todo.completed ? 'done' : 'not-done'}>
                {todo.text}
            </span>

            <button className="removeButton" onClick={() => removeTodo(todo.id)}>Ta bort</button>
        </div>
    )
}

export default TodoItem;