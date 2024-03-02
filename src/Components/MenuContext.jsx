// Context to manage menu visibility across components
import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <MenuContext.Provider value={{ isMenuVisible, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    );
};