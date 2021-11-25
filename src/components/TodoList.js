import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const {todoList, handleDelete, handleDone, handleEditTodo} = props;
    
    return (
        <div className="ListTodo">
            {todoList.map((value) => {
                return <TodoItem value={value} handleDelete={handleDelete} key={value.id} handleDone={handleDone} handleEditTodo={handleEditTodo}/>
            })}
        </div>
    );
}

export default TodoList;