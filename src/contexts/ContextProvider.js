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
const [currentColor, setCurrentColor] = useState('#7352FF');
const [currentMode, setCurrentMode] = useState('Dark');

const [screenSize, setScreenSize] = useState(undefined);
const [themeSettings, setThemeSettings] = useState(false);


const setMode = (e)=>{
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);

}

const setColor = (color)=>{
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
    
}

return (
    <StateContext.Provider  value={{activeMenu:activeMenu, setActiveMenu:setActiveMenu, isClicked:isClicked, setIsClicked:setIsClicked, handleClick:handleClick, screenSize:screenSize, setScreenSize:setScreenSize, currentColor:currentColor, setCurrentColor:setCurrentColor, currentMode:currentMode, setCurrentMode:setCurrentMode, themeSettings:themeSettings, setThemeSettings:setThemeSettings, setMode:setMode, setColor:setColor}}>
     {children}
    </StateContext.Provider>
)
}

export const useStateContext = () => useContext(StateContext);

