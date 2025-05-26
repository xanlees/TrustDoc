'use client'

import React from 'react'
import lij from '../../public/personal/lij.jpeg'
import yer from '../../public/personal/yer.jpg'
import Image from 'next/image'
import { Card } from './ui/card'

function Personal() {
  return (
    <Card className='container mx-auto max-w-[1320px] mt-10 p-10'>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
        <div>
          <div className=' bg-gradient-to-b border-[10px] border-white border-b-[20px] shadow-[6px_6px_15px_rgba(0,0,0,0.5)] overflow-hidden'>
            <Image className='rounded w-[150px] h-[200px]' src={lij} alt="personal" />
          </div>
          <p className='mt-3 font-semibold'>ທ້າວ ຊ່ານລີ່ວື່</p>
        </div>
        <div> 
          <div className=' bg-gradient-to-b border-[10px] border-white border-b-[20px] shadow-[6px_6px_15px_rgba(0,0,0,0.5)] overflow-hidden'>
            <Image className='rounded w-[150px] h-[200px]' src={yer} alt="personal" />
          </div>
          <p className='mt-3 font-semibold'>ນາງ ໄຊວື່</p>
        </div>
      </div>
    </Card>
  )
}

export default Personal
