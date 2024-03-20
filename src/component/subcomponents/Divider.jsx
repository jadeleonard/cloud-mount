import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
const Divider = () => {
  const redirect = useNavigate();
  const [data,setData] = useState([]);
  const [error,setError] = useState(null);
  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://vercel-cloud-backend-git-main-lukabartos-projects.vercel.app/api/getitems');
        if(!response.ok) {
            redirect('/error')
        }
        const data = await response.json()
        return setData(data)
      } catch (error) {
        console.log(error)
        setError(error.message)
      }
    };
    fetchData();
  },[])
  return (
    <div className='flex items-center justify-center h-screen'>
      

<div class="grid grid-cols-4 md:grid-cols-6 gap-4">
  </div>
  {data.map((items) =>(
        <div className='w-[125px] sm:w-[250px]'>
        <img src={items.image} className='h-auto max-w-full rounded-lg' alt={items.name} key={items.id} />
        <p>{items.name}</p>
        </div>

       
        ))
  }
   {error && <div>Error fetching the data</div>}
    </div>
  )
}

export default Divider
