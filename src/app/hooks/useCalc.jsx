import React, { useContext, useState } from 'react';

const CalcContext = React.createContext();

export const useCalc = () => {
    return useContext(CalcContext);
};

const CalcProvider = ({ children }) => {
    const [calc, setCalc] = useState({
        sign: '',
        number: 0,
        result: 0,
    });

    return (
        <CalcContext.Provider value={{ calc, setCalc }}>
            {children}
        </CalcContext.Provider>
    );
};

export default CalcProvider;
