import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


import * as AspectRatio from '@radix-ui/react-aspect-ratio';
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
          
       <CarouselContent className='w-1/2'>
        
        <CarouselItem className='shadow-blackA4 w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]'>
        <AspectRatio.Root ratio={16 / 9}>
          <img src='https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_1280.jpghttps://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_1280.jpg' className='h-full w-full object-cover' />
          </AspectRatio.Root>
        </CarouselItem>
        <CarouselItem className='shadow-blackA4 w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]'>
        <AspectRatio.Root ratio={16 / 9}>
            <img src='https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg'  className='h-full w-full object-cover'/>
            </AspectRatio.Root>
          </CarouselItem>
          <CarouselItem className='shadow-blackA4 w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]'>
          <AspectRatio.Root ratio={16 / 9}>
             <img src='https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg' className='h-full w-full object-cover' />
             </AspectRatio.Root>
          </CarouselItem>
          <CarouselItem className='shadow-blackA4 w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]'>
          <AspectRatio.Root ratio={16 / 9}>
             <img src='https://cdn.pixabay.com/photo/2015/01/01/23/55/telephone-586266_1280.jpg' className='h-full w-full object-cover' />
             </AspectRatio.Root>
          </CarouselItem>
          <CarouselItem className='shadow-blackA4 w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]'>
          <AspectRatio.Root ratio={16 / 9}>
             <img src='https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708_640.jpg' className='h-full w-full object-cover' />
             </AspectRatio.Root>
          </CarouselItem>
          <CarouselItem className='shadow-blackA4 w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]'>
          <AspectRatio.Root ratio={16 / 9}>
             <img src='https://cdn.pixabay.com/photo/2020/08/24/21/40/fashion-5515135_640.jpg' className='h-full w-full object-cover' />
             </AspectRatio.Root>
          </CarouselItem>
          <CarouselItem className='shadow-blackA4 w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]'>
          <AspectRatio.Root ratio={16 / 9}>
             <img src='https://cdn.pixabay.com/photo/2022/07/21/20/25/converse-7336903_1280.jpg' className='h-full w-full object-cover' />
             </AspectRatio.Root>
          </CarouselItem>
          
       </CarouselContent>
          
      </Carousel>
   
    </div>
  );
};

export default CarouselComponent;
