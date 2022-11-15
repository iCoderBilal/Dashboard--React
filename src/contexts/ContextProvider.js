import {React, useState, createContext, useContext} from 'react';

const StateContext = createContext();
const intialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({children})=>{
const [activeMenu, setActiveMenu] = useState(true);
const [isClicked, setIsClicked] = useState(intialState);
const handleClick = (clicked) =>{
    setIsClicked({...intialState, [clicked]:true})
}
const [currentColor, setCurrentColor] = useState('#bbbbbb');
const [currentMode, setCurrentMode] = useState('Light');

const [screenSize, setScreenSize] = useState(undefined);
return (
    <StateContext.Provider  value={{activeMenu:activeMenu, setActiveMenu:setActiveMenu, isClicked:isClicked, setIsClicked:setIsClicked, handleClick:handleClick, screenSize:screenSize, setScreenSize:setScreenSize}}>
     {children}
    </StateContext.Provider>
)
}

export const useStateContext = () => useContext(StateContext);

