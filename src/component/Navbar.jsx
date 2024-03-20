import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Input } from '@/components/ui/input';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogHeader, AlertDialogCancel } from '../components/ui/alert-dialog';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const Navbar = () => {
  const [loadings, setLoadings] = useState([]);
  const [email, setEmail] = useState({ email: '', password: '' });
  const [data, setData] = useState([]);
  const redirect = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail(prevEmail => ({
      ...prevEmail,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const response = await axios.post('https://vercel-cloud-backend-git-main-lukabartos-projects.vercel.app/api/createuser',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(email)
        }
        );
        if(response.ok){
          redirect('/dashboard')
        }
      } catch (error) {
        console.log(error)
      }
    };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://vercel-cloud-backend-git-main-lukabartos-projects.vercel.app/api/navbar');
        if (response.ok) {
          const data = await response.json();
          setData(data);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='flex items-center justify-center mx-auto py-2 px-4'>
      <div className='mx-auto'>
        <Link to={'/'}>
        <img src='' width={125} height={40} alt='logo' />
        </Link>
      </div>
      <ul className='hidden sm:inline-flex gap-4 mx-auto'>
        {data.map((items) => (
          <li key={items.id}>
            <Link to={items.href} className='capitalize text-sm text-slate-900'>{items.section}</Link>
          </li>
        ))}
      </ul>
      <AlertDialog>
        <AlertDialogTrigger >
          <Button>Sign In</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Sign In</AlertDialogTitle>
          <AlertDialogHeader>Welcome Back</AlertDialogHeader>
          <Input placeholder='Email' name='email' value={email.email} onChange={handleChange} />
          <Input placeholder='Password' name='password' type='password' value={email.password} onChange={handleChange} />
          <div>
          <Button loading={loadings[1]} onClick={(e) => { enterLoading(1); handleSubmit(e); }}>Submit</Button>


          </div>
          <AlertDialogCancel className='absolute top-2 right-2'>X</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Navbar;
