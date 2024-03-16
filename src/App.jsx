import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Landingpages from './publicpages/Landingpages'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landingpages />} />
    </Routes>
  )
}

export default App
