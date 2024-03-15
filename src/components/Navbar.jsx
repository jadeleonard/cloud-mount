import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger,AlertDialogHeader  } from '@/components/ui/alert-dialog';








import { Moon, Sun } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';












const Navbar = () => {
  const { setTheme } = useTheme()
    const [data,setData] = useState([]);
    




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://vercel-cloud-backend-git-main-lukabartos-projects.vercel.app/api/navbar');
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
    <div className='flex items-center justify-center mx-auto sticky top-0 z-10 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 py-2 px-4'>
      <div className='mx-auto'><img src='' width={125} height={40} alt='logo'/></div>




      <ul className='hidden sm:inline-flex gap-4 mx-auto'>
        {data.map((items) =>(
            <li key={items.id}>

                <Link to={items.href} className='uppercase text-md'>{items.section}</Link>
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
          <Button variant={"ghost"} size={"sm"} className='block sm:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
</svg>
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
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default Navbar
