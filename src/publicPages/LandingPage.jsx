import Navbar from '@/components/Navbar'
import React from 'react'
import CarouselComponent from '../components/CarouselComponent'
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Data from '@/components/Form';








const LandingPage = () => {
  return (
    <div>
        <Navbar />
        
       <CarouselComponent />
        
    <Data />
          
    </div>
  )
}

export default LandingPage
