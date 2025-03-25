import { useState } from "react";

function TodoInput({addTodo}) {
    const[text, setText] = useState("");

    return (
        <div>
            <input type="text" value={text} className="left"
            onChange={(e) => setText(e.target.value)}
            />

            <button className="right" 
            onClick={() => {
                if (text.trim() !== "") 
                {
                    addTodo(text);
                    setText("");
                }
                }} >Lägg till</button>
        </div>
    )


}

export default TodoInput;  
