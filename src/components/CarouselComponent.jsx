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
        const response = await axios.get(process.env.REACT_APP_API); // Replace 'https://example.com/api' with your actual endpoint
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
          {data.map((item) => (
            <CarouselItem key={item.id}>
              <img src={item.image} alt={item.name} className='object-fit rounded py-2 px-4 ' width={300} height={300}/>

            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
