import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};

const Divider = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://vercel-cloud-backend-git-main-lukabartos-projects.vercel.app/api/getitems');
        if (!response.ok) {
          navigate('/error');
          return;
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    fetchData();
  }, [navigate,inView]);

  return (  
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    >
      <div className='flex items-center justify-center h-screen'>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          {data.map((item) => (
            <div className='w-[125px] sm:w-[250px]' key={item.id}>
              <img src={item.image} className='h-auto max-w-full rounded-lg' alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        {error && <div>Error fetching the data</div>}
      </div>
    </motion.div>
  );
}

export default Divider;
