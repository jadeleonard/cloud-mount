import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Landingpages from './publicpages/Landingpages'
import SignUp from './publicpages/SignUp'
import Categories from './publicpages/Categories'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_API_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const App = () => {






  return (

    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Routes>
      <Route path='/' element={<Landingpages />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
    </ClerkProvider>
 
  )
}

export default App
