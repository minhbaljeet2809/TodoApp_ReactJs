import React, {useState} from "react";


const TodoFrom = (props) => {
    const [todo, setTodo] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        if(todo.trim() === ''){
            return alert('Hãy nhập nội dung todo');
        }
        props.handleSubmit(todo);
        setTodo('');
    }

    return (
        <div className="Todo_FormInput">
            <form>
                <input type="text" placeholder="Nhập công việc cần làm" value={todo} onChange={(value) => setTodo(value.target.value)} />
                <button onClick={handleAddTodo}>
                    add
                </button>
            </form>
        </div>
    )
}

export default TodoFrom;