import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogHeader, AlertDialogCancel } from '../components/ui/alert-dialog';
import { useNavigate } from 'react-router-dom'
import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { motion, useScroll } from "framer-motion"
import axios from 'axios';

const Navbar = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiSub = import.meta.env.VITE_API_CREATE;
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
      const response = await axios.post(apiSub, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(email)
      });
      if (response.ok) {
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
        const response = await fetch(apiUrl);
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
    <div className='flex items-center justify-center mx-auto py-2 px-4 sticky top-0 bg-orange-400'>
      <div className='mx-auto'>
        <Link to={'/'}>
          <img src='' width={125} height={40} alt='logo' />
        </Link>
      </div>
      <ul className='hidden sm:inline-flex gap-4 mx-auto text-sm'>
        {data.map((items) => (
          <li key={items.id}>
            <Link to={items.href} className='capitalize text-sm'>{items.section}</Link>
          </li>
        ))}
      </ul>
      <SignedOut>
        {/* Render the "Sign In" button only if the user is not logged in */}
        <AlertDialog>
          <AlertDialogTrigger>
            <Button>Sign In</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <SignIn />
            <AlertDialogCancel className='absolute top-2 right-2'>
              X
            </AlertDialogCancel>
          </AlertDialogContent>
        </AlertDialog>
      </SignedOut>
      <SignedIn>
        {/* Render the user button if the user is logged in */}
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
    </div>
  );
};

export default Navbar;
