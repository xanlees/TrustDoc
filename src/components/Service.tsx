'use client'

import React from 'react'
import { Card } from './ui/card'

function Service() {
  return (
      <Card className="realtive mx-auto max-w-[1320px] p-10 overflow-hidden">
          <div className='flex flex-col items-center justify-center text-center'>
              <h2 className='text-xl font-bold bg-yellow-500 p-2 rounded w-full'>🛠️ ບໍລິການຂອງພວກເຮົາ</h2>
              <p className='mt-3'>ຄົບຖ້ວນ, ສະດວກ, ແລະພ້ອມທີ່ຈະດູແລທຸກຂັ້ນຕອນຂອງເອກະສານຂອງທ່ານ.
                ພວກເຮົາມີທີມງານຜູ້ຊ່ຽວຊານດ້ານເອກະສານທາງການ. ພ້ອມໃຫ້ບໍລິການຈາກການໃຫ້ຄຳປຶກສາ ກວດກາເອກະສານ ຈົນເຖິງການຍື່ນສະເໜີ ແລະ ຕິດຕາມທັງພາຍໃນ ແລະ ຕ່າງປະເທດ.
              </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
              <div className='mt-8'>
                  <h2 className='text-xl font-bold text-yellow-500'>📘 ບໍລິການຂໍໜັງສືຜ່ານແດນ (Passport) </h2>
                  <ul className='mt-3 list-disc list-inside'>
                      <li>ໃຫ້ຄໍາແນະນໍາກ່ຽວກັບເອກະສານທີ່ຈໍາເປັນ.</li>
                      <li>ຊ່ວຍຈອງຄິວສໍາລັບການເຮັດຫນັງສືຜ່ານແດນ.</li>
                      <li>ກະກຽມເອກະສານ ແລະແບບຟອມ.</li>
                      <li>ດູແລການປ່ຽນປື້ມໃຫມ່ / ໃນກໍລະນີຫນັງສືຜ່ານແດນສູນເສຍ.</li>
                  </ul>
                  <p className='mt-3 text-xl font-bold text-yellow-500'>₭ ຄ່າບໍລິການລັດຄິວດ່ວນ: </p>
                  <ul className='mt-3 list-disc list-inside'>
                      <li>👉 ລາຄາ14 ມື້ 1,900,000 ₭.</li>
                      <li>👉 ລາຄາ 5 ມື້ 2,300,000 ₭.</li>
                      <li>👉 ລາຄາ 3 ມື້ 2,500,000 ₭.</li>
                      <li>👉 ລາຄາ 2 ມື້ 2,900,000 ₭.</li>
                  </ul> <br />
                  <span className=' text-xl font-semibold bg-yellow-500 p-2 rounded'>ພ້ອມມາມື້ໃດໄດ້ສຳພາບພາຍໃນມື້ນັ້ນ!</span>
              </div>
              <div className='mt-8'>
                  <h2 className='text-xl font-bold text-yellow-500'>🛂 ບໍລິການຂໍວີຊານັກທ່ອງທ່ຽວ/ທຸລະກິດ/ຄູ່ສົມລົດ </h2>
                  <ul className='mt-3 list-disc list-inside'>
                      <li>ກວດເບິ່ງຄຸນສົມບັດຂອງຜູ້ສະຫມັກ.</li>
                      <li>ໃຫ້ຄໍາແນະນໍາດ້ານເອກະສານສະເພາະປະເທດ.</li>
                      <li>ຊ່ວຍຂຽນແບບຟອມ + ຈອງຄິວຢຶ່ນ.</li>
                  </ul>
              </div>
              <div className='mt-5'>
                  <h2 className='text-xl font-bold text-yellow-500'>💍 ບໍລິການຢັ້ງຢືນເອກະສານການແຕ່ງງານ/ໃບທະບຽນແຕ່ງງານກັບຄົນຕ່າງປະເທດ</h2>
                  <ul className='mt-3 list-disc list-inside'>
                      <li>ແປເອກະສານເປັນພາສາອັງກິດ/ພາສາທ້ອງຖິ່ນ.</li>
                      <li>ການຢັ້ງຢືນຈາກກົມກົງສຸນ / ສະຖານທູດ.</li>
                      <li>ຈັດເອກະສານການແຕ່ງງານທີ່ຖືກຕ້ອງຕາມກົດໝາຍ.</li>
                      <li>ໃຫ້ຄໍາແນະນໍາຖ້າເອກະສານຕ້ອງໃຊ້ຢູ່ຕ່າງປະເທດ.</li>
                  </ul>
              </div>
              <div className='mt-5'>
                  <h2 className='text-xl font-bold text-yellow-500'>🚗 ບໍລິການໃບຂັບຂີ່ ແລະ ໃບຂັບຂີ່ສາກົນ</h2>
                  <ul className='mt-3 list-disc list-inside'>
                      <li>ກວດເບິ່ງເອກະສານທີ່ໃຊ້.</li>
                      <li>ນັດພົບຢູ່ກົມຂົນສົ່ງ.</li>
                      <li>ກະກຽມແບບຟອມ / ກວດສອບຄຸນສົມບັດ.</li>
                      <li>ແປໃບຂັບຂີ່ສຳລັບໃບສະໝັກສາກົນ.</li>
                  </ul>
              </div>
        </div>
      </Card>
  )
}

export default Service
