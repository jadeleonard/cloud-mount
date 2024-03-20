import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Landingpages from './publicpages/Landingpages'
import SignUp from './publicpages/SignUp'
import Categories from './publicpages/Categories'
const App = () => {






  return (
    <Routes>
      <Route path='/' element={<Landingpages />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
  )
}

export default App
