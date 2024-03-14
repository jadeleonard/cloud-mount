import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger,AlertDialogHeader  } from '@/components/ui/alert-dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Avatar } from './ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';


const Navbar = () => {
    const [data,setData] = useState([]);
    




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('vercel-cloud-backend-git-main-lukabartos-projects.vercel.app/api/navbar');
                if (response.ok) {
                    const jsonData = await response.json(); // Await JSON parsing
                    setData(jsonData); // Set state with parsed JSON data
                    console.log(jsonData)
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    
  return (
    <div className='flex items-center justify-center py-2 px-4 mx-auto'>
      <div className='mx-auto'><img src='' width={125} height={40} alt='logo'/></div>




      <ul className='hidden sm:inline-flex gap-4 mx-auto'>
        {data.map((items) =>(
            <li key={items.id}>

                <Link to={items.href}>{items.name}</Link>
            </li>
        ))}
      </ul>
      <AlertDialog>
        <AlertDialogTrigger asChild>
      <Button variant={"ghost"} size={"sm"}>
          Sign Up
      </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          Sign Up
        </AlertDialogHeader>
      </AlertDialogContent>
      </AlertDialog>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"sm"}>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png'/>

              
            </Avatar>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>
            My Account
          </SheetTitle>
          <SheetHeader>
            Profile
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Navbar
