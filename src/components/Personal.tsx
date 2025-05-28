'use client'

import React from 'react'
import lij from '../../public/personal/lij.jpeg'
import yer from '../../public/personal/yers.jpeg'
import Image from 'next/image'
import { Card } from './ui/card'

function Personal() {
  return (
    <Card className='container mx-auto max-w-[1320px] mt-10 p-10'>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
        <div>
          <div className=' bg-gradient-to-b border-[10px] border-white border-b-[20px] shadow-[6px_6px_15px_rgba(0,0,0,0.5)] overflow-hidden'>
            <Image className='rounded w-[180px] h-[250px]' src={lij} alt="personal" />
          </div>
        </div>
        <div className='w-[180px] -mt-10'>
          <p className='mt-3 font-semibold'>ທ້າວ ຊ່ານລີ່ວື່ ເປັນຜູ້ໃຫ້ຄຳປືກສາຂໍ້ມູນ ແລະ ກະກຽມເອກະສານຕ່າງໆ ແລະ ເຮັດວຽກໃນສາຍນີ້ຫຼາຍກວ່າ 2 ປີແລ້ວ</p>
        </div>
        <div> 
          <div className=' bg-gradient-to-b border-[10px] border-white border-b-[20px] shadow-[6px_6px_15px_rgba(0,0,0,0.5)] overflow-hidden'>
            <Image className='rounded w-[180px] h-[250px]' src={yer} alt="personal" />
          </div>
        </div>
        <div className='w-[180px] -mt-10'>
          <p className='mt-3 font-semibold'>ນາງ ໄຊວື່ ເປັນຜູ້ໃຫ້ບໍລິການດ້ານເອກະສານໂດຍສະເພາະ ແລະ ເຮັດວຽກໃນສາຍນີ້ຫຼາຍກວ່າ 5 ປີແລ້ວ</p>
        </div>
      </div>
    </Card>
  )
}

export default Personal
