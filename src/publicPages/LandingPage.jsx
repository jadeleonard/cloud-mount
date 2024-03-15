import Navbar from '@/components/Navbar'
import React from 'react'
import CarouselComponent from '../components/CarouselComponent'
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Data from '@/components/Form';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';








const LandingPage = () => {
  return (
    <div>
    
        
    <CarouselComponent />
    <Link to={'/createitem'}>Create</Link>
    </div>
  )
}

export default LandingPage
