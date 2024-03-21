import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useScroll } from 'framer-motion';

const Feature = () => {
  const [data, setData] = useState([]);
  const { scrollYProgress } = useScroll();
const apiUrl = import.meta.env.VITE_API_ITEMS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="grid gap-4">
        <div className="flex items-center justify-center">
          <div className="w-[500px] sm:w-[900px]">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {data.map((item) => (
            <div className="border rounded shadow-md py-2 px-4" key={item.id}>
              <img src={item.image} className="h-auto max-w-full rounded-lg" alt="" />
              <p className="text-sm font-bold">{item.name}</p>
              <p className="text-yellow-600">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
        {/* Add your other buttons here */}
      </div>
      {/* Add your other content here */}
      <Link to={'/categories'}>Categories</Link>
    </div>
  );
};

export default Feature;
