import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Form = () => {
  return (
    <div>
       <div className='flex items-center justify-center h-1/2 w-1/2 z-10 absolute '>
            <div className='hidden sm:block sm:w-[600px]'>
                <div className='flex gap-2'>
            <Input type='search' placeholder='Search' />
            <Button>
                Search
            </Button>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Form
