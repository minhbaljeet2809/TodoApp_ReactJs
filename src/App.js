import './App.css';
import React from 'react';
import Todo from './components/Todo';
import ThemeContextProvider from './context/ThemContext';
import ButtonTheme from './components/ButtonChangeTheme';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <div className="container">
          <div className="Header">
            <h1>Todo app</h1>
          </div>
          <ButtonTheme />
          <Todo />
        </div>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
