import {createContext, useState, useEffect} from "react";
const CarouselFilterContext = createContext('');
const CarouselFilterProvider = ({ children }) => {
    const [value, setValue] = useState(null);

    const updateValue = (newValue) => {
        setValue(newValue);
    };

    return (
        <CarouselFilterContext.Provider value={{ value, updateValue }}>
            {children}
        </CarouselFilterContext.Provider>
    );
};

export { CarouselFilterContext, CarouselFilterProvider };