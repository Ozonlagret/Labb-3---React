import { useState } from "react";

function TodoInput({addTodo}) {
    const[text, setText] = useState("");

    function handleAdd() {
        if (text.trim() !== "") {
            addTodo(text);
            setText("");
        }
    };

    return (
        <div>
            <input type="text" value={text} className="left"
            onChange={(e) => setText(e.target.value)}
            />

            <button className="right" onClick={handleAdd}>Lägg till</button>
        </div>
    )


}

export default TodoInput; 