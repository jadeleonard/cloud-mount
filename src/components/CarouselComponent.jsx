import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import axios from 'axios';

const CarouselComponent = () => {
  const [data, setData] = useState([]);
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://vercel-cloud-backend-git-main-lukabartos-projects.vercel.app/api/getitems'); // Replace 'https://example.com/api' with your actual endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className='relative p-2'>
      <Carousel setApi={setApi} plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <img src={item.image} alt={item.name} />

            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
