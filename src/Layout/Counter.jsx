import React, { useState } from 'react';

export const TotalContext = React.createContext();

export const TotalProvider = ({ children }) => {
    const [total, setTotal] = useState(2);

    const cambiarTotal = (valor) => {
        setTotal((prevVariable) => prevVariable + valor);
    };

    return (
        <TotalContext.Provider value={{ total, cambiarTotal }}>
            {children}
        </TotalContext.Provider>
    );
};