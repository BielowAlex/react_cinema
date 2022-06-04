import React from 'react';
import {useTheme} from "../../hooks";

const Switcher = () => {
    const toggleTheme = useTheme();

    return (
        <input type="checkbox" className="switch-btn" onClick={toggleTheme}/>
    );
};

export {Switcher};
