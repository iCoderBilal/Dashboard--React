import {React, useEffect, useState} from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';


function App() {
const {activeMenu, setActiveMenu} = useStateContext();
  return (
   <BrowserRouter>
   <div className="flex relative dark:bg-main-dark-bg">
    <div className="fixed right-4 bottom-4" style={{ zIndex:'1000' }}>
    <TooltipComponent content="Settings" position="Top">
     <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: 'pink', borderRadius: '50%'}}>
    <FiSettings />
     </button>
    </TooltipComponent>
    </div>

    {activeMenu ? (
      <div className='fixed w-72 sidebar dark:bg-secondary-dark-bg bg-white'>
        <Sidebar/>
      </div>
    ) : (
      <div className='w-0 dark-bg-secondary-dark-bg'>
  <Sidebar/>
      </div>
    )}
  <div className={` dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
  <div className=' fixed md:static  bg-white-500 dark:bg-main-dark-bg navbar w-full'>
    <Navbar/>
  </div>
 

  <div>
  <Routes>
     {/* DASHBOARD */}
    <Route path='/' element = {<Ecommerce />}/>
    <Route path='/ecommerce' element = {<Ecommerce />}/>

    {/* PAGES */}
    <Route path='/orders' element = {<Orders />}/>
    <Route path='/employees' element = {<Employees />}/>
    <Route path='/customers' element = {<Customers />}/>

    {/* APPS */}
    <Route path='/kanban' element = {<Kanban />}/>
    <Route path='/editor' element = {<Editor />}/>
    <Route path='/calendar' element = {<Calendar />}/>
    <Route path='/color-picker' element = {<ColorPicker />}/>

    {/* CHARTS */}
    <Route path='/line' element = {<Line />}/>
    <Route path='/area' element = {<Area/>}/>
    <Route path='/pie' element = {<Pie />}/>
    <Route path='/bar' element = {<Bar />}/>
    <Route path='/financial' element = {<Financial />}/>
    <Route path='/color-mapping' element = {<ColorMapping />}/>
    <Route path='/pyramid' element = {<Pyramid />}/>
    <Route path='/stacked' element = {<Stacked />}/>

 
 
  </Routes>
</div>
</div>

   </div>
   </BrowserRouter>
  );
}

export default App;
