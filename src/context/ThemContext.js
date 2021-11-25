import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({
        isDarkMode: true,
        darkMode: { background: "rgb(34,34,34)", color: "white" },
        whiteMode: { background: "rgb(240,240,240)", color: "black" },
    })

    const handleChangeTheme = () => {
        setTheme((pre) => ({
            ...pre, isDarkMode: !pre.isDarkMode
        }))
    }

    const themeContext = {
        theme: theme,
        handleChangeTheme: handleChangeTheme
    }

    return (
        <ThemeContext.Provider value={themeContext}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
