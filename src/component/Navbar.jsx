import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
const Navbar = () => {
  
  const [data,setData] = useState([]);
  useEffect(() =>{
    const fetchData = async () =>{
      try {
        const response = await fetch('https://vercel-cloud-backend-git-main-lukabartos-projects.vercel.app/api/navbar');
        if(response.ok){
          const data = await response.json() ;
          setData(data)
          console.log(data)
        }
      } catch (error) {4
        console.log(error)
      }
    };
    fetchData();
  },[])
  return (
    <div className='flex items-center justify-center mx-auto py-2 px-4'>
      <div className='mx-auto'>
        <img src='' width={125} height={40} alt='logo' />



      </div>
      <ul className='hidden sm:inline-flex gap-4 mx-auto'>
        {data.map((items) =>(
            <li key={items.id}>
              <Link to={items.href} className='capitalize text-sm text-slate-900'>{items.section}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
