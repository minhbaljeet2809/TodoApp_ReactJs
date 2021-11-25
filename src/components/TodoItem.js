import React, { useState } from 'react';

const TodoItem = (props) => {
    const { value, handleDelete, handleDone, handleEditTodo } = props;
    const [isEdit, setIsEdit] = useState(false);
    const [todo, setTodo] = useState(value.todo);

    const handelEitState = () => {
        setIsEdit((pre) => !pre);
        if (isEdit && todo.trim() !== '') {
            const newValue = { ...value, todo: todo }
            handleEditTodo(newValue);
        } else {
            setTodo(value.todo);
        }
    }

    if (!isEdit) {
        return <div className="ItemTodo" key={value.id}>
            <p className={value.isDone ? "p-done" : ''}>{value.todo}</p>
            <button className="btn_done" onClick={() => handleDone(value)}>{value.isDone ? "Reject" : "Done"}</button>
            <button className="btn_edit" onClick={handelEitState}>Sửa</button>
        </div>
    } else {
        return <div className="ItemTodo" key={value.id}>
            <input type="text" value={todo} onChange={(e) => { setTodo(e.target.value) }} />
            <button className="btn_edit" onClick={handelEitState}>Sửa</button>
            <button className="btn_delete" onClick={() => handleDelete(value)}>Xoá</button>
        </div>
    }

}

export default TodoItem;