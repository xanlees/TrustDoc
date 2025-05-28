
import React from 'react'
import { Card } from './ui/card'
import { ChevronLeft, ChevronRight, FolderCheck } from 'lucide-react'

function ApplyDone() {
  return (

    <Card className='p-0 w-[450px] h-[350px] '>
      <div className='flex flex-col justify-center items-center h-full'>
        <div className='p-4 rounded-lg text-center font-semibold'>
          <h3>ການຈອງຄິວຂອງທ່ານແມ່ນສຳເລັດແລ້ວ</h3>
          <p className='bg-yellow-400 p-2 rounded-lg mt-2 flex'><ChevronRight className='w-10 font-bold text-green-500'/>ກະລຸນາລໍຖ້າພວກເຮົາຈະຕິດຕໍ່ກັບຫາທ່ານໃນໄວໆນີ້ <ChevronLeft className='w-10 font-bold text-green-500'/></p>
        </div>
        <p className='text-4xl font-bold mt-5 bg-green-400 p-2 rounded-lg'>ຂໍຂອບໃຈ</p>
        <span className='mt-3'>
          <FolderCheck className=' w-20 h-20 text-green-500' />
        </span>
      </div>
    </Card>
  )
}

export default ApplyDone
