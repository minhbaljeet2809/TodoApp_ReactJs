import React, { useState, useContext } from 'react';
import TodoFrom from './TodoForm';
import TodoList from './TodoList';
import { ThemeContext } from '../context/ThemContext';


const Todo = () => {
    const { theme, handleChangeTheme } = useContext(ThemeContext);
    const { isDarkMode, darkMode, whiteMode } = theme;
    const [todoList, setTodoList] = useState([]);
    const handleSubmit = (value) => {
        setTodoList((pre) => ([...pre, { id: Math.random() * 1000, todo: value, isDone: false }]));
    };
    const styles = isDarkMode ? darkMode : whiteMode;
    const handleDelete = (value) => {
        setTodoList(pre => {
            return pre.filter(item => item.id !== value.id);
        });
    };

    const handleDone = (value) => {
        setTodoList(pre => {
            return pre.map(item => {
                if (item.id === value.id) {
                    return { ...item, isDone: !item.isDone }
                }
                return item;
            });
        });
    };

    const handleEditTodo = (value) => {
        setTodoList(pre => {
            return pre.map(item => {
                if (item.id === value.id) {
                    return { ...item, todo: value.todo }
                }
                return item;
            });
        });
    }


    return (
        <div className="Todo_Container" style={styles}>
            <TodoFrom handleSubmit={handleSubmit} />
            <TodoList todoList={todoList} handleDelete={handleDelete} handleDone={handleDone} handleEditTodo={handleEditTodo} />
        </div>
    )
}

export default Todo;