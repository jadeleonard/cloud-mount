import React from 'react'
import Navbar from '../component/Navbar'
import { motion, useScroll } from "framer-motion";





import { Button, Flex } from 'antd';
import Hero from '@/component/Hero';


const Landingpages = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
  <motion.div
        className="fixed top-0 right-0 left-0 bg-slate-900 h-[20px]"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />

<Hero />
    </div>
  )
}

export default Landingpages
