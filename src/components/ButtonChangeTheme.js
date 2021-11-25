import React, { useContext } from 'react';
import {ThemeContext} from '../context/ThemContext';

const ButtonTheme = () => {
    const {handleChangeTheme} = useContext(ThemeContext)

    return (
        <div>
            <button onClick={handleChangeTheme}>
                change theme
            </button>
        </div>
    );
}

export default ButtonTheme;