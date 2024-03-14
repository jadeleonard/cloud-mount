import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"

const CarouselComponent = () => {
  return (

      <Carousel className='absolute top-0 z-auto  min-h-[600px] min-w-[1200px]'
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
         <CarouselContent className=''>
        <CarouselItem>
        <img src='https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg'width={1200} height={600}className='object-cover  relative rounded shadow-md transition duration-500 w-[600px] sm:w-full'/>
        </CarouselItem>
        <CarouselItem><img src='https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_1280.jpg' width={1200} height={600} className='object-cover  relative rounded shadow-md transition duration-500 w-[600px] sm:w-full'/></CarouselItem>
 
        <CarouselItem><img src='https://cdn.pixabay.com/photo/2016/03/27/19/57/cold-1284028_1280.jpg' width={1200} height={600} className='object-cover  relative rounded shadow-md transition duration-500 w-[600px] sm:w-full'/></CarouselItem>
      </CarouselContent>
     
    </Carousel>
  
    
  )
}

export default CarouselComponent
