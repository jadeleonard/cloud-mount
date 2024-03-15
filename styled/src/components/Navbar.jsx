import React from 'react'
import useFetch from './hooks/Fetcher'
import { Link } from 'react-router-dom';
const Navbar = () => {








    const apiUrl = 'http://localhost:3001/api/navbar';
    const {data,isloading,error} = useFetch(apiUrl);

    if(isloading){
      return <div>Loading...</div>
    }
    if(error){
      return <div>{error.message}</div>
    }
  return (
    <div className='flex items-center justify-between mx-auto py-2 px-4'>
      <div className='mx-auto'>




        <img src='' width={125} height={40} alt='' />
      
      </div>
      <ul className='hidden sm:inline-flex gap-4 mx-auto'>
            {data.map((items) =>(
                <li key={items.id}>
                    <Link to={items.href}>{items.section}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar
