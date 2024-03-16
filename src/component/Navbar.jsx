import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex } from 'antd';
import {Input} from '@/components/ui/input'
import { Dropdown, Space } from 'antd';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,AlertDialogCancel } from '../components/ui/alert-dialog';
const Navbar = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
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
      <AlertDialog>
        <AlertDialogTrigger>
        <Button>Sign In</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>
            Sign In
          </AlertDialogTitle>
          <AlertDialogHeader>
            Welcome Back
          </AlertDialogHeader>
          <Input placeholder='Email'/>
          <Input placeholder='password'/>
          <Input type=''/>
          <div>
          <Button   loading={loadings[1]}
          onClick={() => enterLoading(1)}>Submit</Button>
          </div>
          <AlertDialogCancel className='absolute top-2 right-2'>
          X
        </AlertDialogCancel>
        </AlertDialogContent>
        
        </AlertDialog>
    </div>
  )
}

export default Navbar
