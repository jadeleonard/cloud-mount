import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { useState,useEffect } from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
const CarouselComponent = () => {
  const [ data,setData] = useState([]);

  useEffect(() =>{
    const fetchData = async () =>{
      try {
        const response = await fetch('https://vercel-cloud-backend-git-main-lukabartos-projects.vercel.app/api/carousel');
        if(response.ok){
          const data = await response.json();
          setData(data)
        }
      } catch (error) {
          console.log(error ) 
      }
    }
  })
  return (
    <div className='relative p-2'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
          
       <CarouselContent className='w-1/2'>
        
        <CarouselItem className='shadow-blackA4 w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]'>
          {data.map((items) =>(
        <AspectRatio.Root ratio={16 / 9}>
          <img src={items.image} className='h-full w-full object-cover' alt={items.name} key={items.id}/>
          </AspectRatio.Root>
          ))}
        </CarouselItem>
          
       </CarouselContent>
          
      </Carousel>
   
    </div>
  );
};

export default CarouselComponent;
