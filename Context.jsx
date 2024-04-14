import React, { createContext, useRef, useState } from 'react';


const MainContext = createContext();
const Context = (props) => {

    const [lock, setLock] = useState(false);
    const [count, setCount] = useState(0);

    let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);


    const Winner = useRef();

    return (
        <MainContext.Provider value={{ lock, setLock, count, setCount, data, setData, Winner }}>
            {props.children}
        </MainContext.Provider>
    );
}

export default Context;

export { MainContext };
