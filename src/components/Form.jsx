import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';


const Data = () => {
  const [data, setData] = useState([]);



  useEffect(() =>{
  const fetchData = async () => {
    try {
      const response = await fetch('https://vercel-cloud-backend-git-main-lukabartos-projects.vercel.app/api/getitems');
      if (response.ok) {
        const jsonData = await response.json(); // Parse response body as JSON
        setData(jsonData);
        console.log(jsonData);
      } else {
        console.log('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    };
    
  };
  fetchData();
},[])
  
  return (
   




    <div className='w-full border shadow-md rounded py-2 px-4'>
        {data.map((items) =>(
          <div key={items.id}>
            <Link to={`/details/${items.id}`}>
            <p>{items.name}</p>
            
            <p>${items.price}</p>
          
            <img src={items.image} width={400} height={600} alt={items.name} />
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Data
