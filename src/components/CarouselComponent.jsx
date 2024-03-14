import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Input } from './ui/input';
import Form from './Form';

const CarouselComponent = () => {
  return (
    <div className='relative p-2'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <Form />
       <CarouselContent className='w-full'>
        <CarouselItem>
         
          <img src='https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_1280.jpghttps://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_1280.jpg' className='w-full' />

        </CarouselItem>
        <CarouselItem>
            <img src='https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg'  className='w-full'/>
          </CarouselItem>
          <CarouselItem>
             <img src='https://cdn.pixabay.com/photo/2016/03/27/19/57/cold-1284028_1280.jpg' className='w-full' />
          </CarouselItem>
       </CarouselContent>
      </Carousel>
   
    </div>
  );
};

export default CarouselComponent;
