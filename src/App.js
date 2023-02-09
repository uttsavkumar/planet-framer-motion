import React, { useEffect } from 'react'
import MainPage from './HomePages/MainPage'
import Mercury from './PlanetsPages/Mercury'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Venus from './PlanetsPages/Venus';
import Earth from './PlanetsPages/Earth';
import Mars from './PlanetsPages/Mars';
import Jupiter from './PlanetsPages/Jupiter';
import Saturn from './PlanetsPages/Saturn';
import Uranus from './PlanetsPages/Uranus';
import Neptune from './PlanetsPages/Neptune';
const App = () => {
  const location = useLocation()
  
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location} >
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/mercury' element={<Mercury />}></Route>
          <Route path='/venus' element={<Venus />}></Route>
          <Route path='/earth' element={<Earth />}></Route>
          <Route path='/mars' element={<Mars />}></Route>
          <Route path='/jupiter' element={<Jupiter />}></Route>
          <Route path='/saturn' element={<Saturn />}></Route>
          <Route path='/uranus' element={<Uranus />}></Route>
          <Route path='/neptune' element={<Neptune/>}></Route>
        </Routes>
      </AnimatePresence>


    </>
  )
}

export default App