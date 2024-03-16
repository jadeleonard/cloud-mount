import React from 'react'
import Navbar from '../component/Navbar'






import { Button, Flex } from 'antd';


const Landingpages = () => {
  return (
    <div>
      <Navbar />



      <Flex gap="small" wrap="wrap">
      <Button type="primary">Primary Button</Button>
      </Flex>

    </div>
  )
}

export default Landingpages
