import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';


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
   

    <div className=''>
      <Card>
      
        {data.map((items) =>(
          <Link to={`/details/${items.id}`}>
          <CardContent key={items.id}>
            <CardHeader>
              ${items.price}
            </CardHeader>
            <CardTitle>
              {items.name}
            </CardTitle>
              <CardDescription>
                <img src={items.image} className='relative rounded object-fit' />
              </CardDescription>
              <CardDescription>
                {items.description}
              </CardDescription>
          </CardContent>
          </Link>
        ))}
      </Card>
    </div>
  )
}

export default Data
