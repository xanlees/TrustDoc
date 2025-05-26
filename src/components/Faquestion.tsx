'use client'

import React from 'react'
import { Card } from './ui/card'
import { GridPattern } from './magicui/grid-pattern'
import { cn } from '@/lib/utils'

function Faquestion() {
  return (
    <Card className='relative mx-auto max-w-[1320px] mt-10 p-10 overflow-hidden'>
      <div className='text-center'>
        <h2 className='text-xl font-bold bg-yellow-500 p-2 rounded w-full'>❓ ຄຳຖາມທີ່ມັກຖາມເລື້ອຍໆ?</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-1'>
        <div>
          <p className='mt-3 font-bold'>1. ຕ້ອງມີເອກະສານຫຍັງແດ່ເພື່ອຍື່ນຂໍວີຊາ?</p>
          <span>ເອກະສານພື້ນຖານທີ່ຕ້ອງການປະກອບມີ:</span>
          <ul className='mt-3 list-disc list-inside'>
            <li>ໜັງສືຜ່ານແດນ</li>
            <li>ຖ່າຍຮູບຕາມຂະໜາດທີ່ສະຖານທູດລະບຸ</li>
            <li>ເອກະສານທາງດ້ານການເງິນເຊັ່ນ: ໃບແຈ້ງຍອດທະນາຄານ</li>
            <li>ເອກະສານຢັ້ງຢືນການເຮັດວຽກ ຫຼືໃບຢັ້ງຢືນຈາກບໍລິສັດ</li>
            <li>ປີ້ຍົນ/ຫຼັກຖານການຈອງທີ່ພັກ</li>
          </ul>
        </div>
        <div>
          <p className='mt-3 font-bold'>2. ຂ້ອຍບໍ່ມີເວລາຍື່ນເອກະສານດ້ວຍຕົນເອງ. ເຈົ້າສາມາດດຳເນີນການແທນໄດ້ບໍ?</p>
          <span>ແມ່ນແລ້ວ, ພວກເຮົາມີບໍລິການຮັບເອກະສານຄົບ - ປັບປຸງ - ຍື່ນເອກະສານ. <br />ລູກຄ້າບໍ່ຈໍາເປັນຕ້ອງໄປດ້ວຍຕົນເອງໃນບາງກໍລະນີ (ເຊັ່ນ: ວີຊາສໍາລັບບາງປະເທດ,<br /> ຍື່ນຂໍໃບຂັບຂີ່ສາກົນ, ການແປພາສາເອກະສານ, ແລະອື່ນໆ).
            <br />ພວກເຮົາຈະແຈ້ງລ່ວງຫນ້າຖ້າມີຂັ້ນຕອນໃດໆທີ່ລູກຄ້າຕ້ອງການໄປດ້ວຍຕົນເອງ.</span>
        </div>
        <div>
          <p className='mt-3 font-bold'>3. ໃຊ້ເວລາຈັກມື້ເພື່ອຂໍວີຊາ?</p>
          <ul className='mt-3 list-disc list-inside'>
            <li>🇯🇵 ຍີ່ປຸ່ນ: 5-7 ມື້</li>
            <li>🇺🇸 USA: 10-15 ມື້ (ລວມມື້ສຳພາດ)</li>
            <li>🇰🇷 ເກົາຫຼີ: 7-10 ມື້</li>
          </ul>
        </div>
        <div>
          <p className='mt-3 font-bold'>4. ຂ້ອຍເຄີຍຖືກປະຕິເສດວີຊ່າມາກ່ອນ. ຂ້ອຍຍັງສາມາດຮ້ອງຂໍໃຫມ່ໄດ້ບໍ?</p>
          <span>ສາມາດຍື່ນໃຫມ່ໄດ້. ແຕ່ເອກະສານຄວນໄດ້ຮັບການປັບປຸງ. ແລະໃຫ້ເຫດຜົນສະເພາະ ຫຼືຂໍ້ມູນເພີ່ມເຕີມ ພວກເຮົາມີບໍລິການວິເຄາະເຫດຜົນຂອງການປະຕິເສດ ແລະຊ່ວຍກະກຽມເອກະສານໃຫ້ຄົບຖ້ວນກວ່າແຕ່ກ່ອນ</span>
        </div>
        <div>
          <p className='mt-3 font-bold'>5. ຂ້ອຍຕ້ອງຈ່າຍເງີນລ່ວງໜ້າບໍ?</p>
          <span>ລູກຄ້າສາມາດຊໍາລະເງິນຝາກລ່ວງຫນ້າແລະຊໍາລະຈໍານວນທີ່ຍັງເຫຼືອໃນເວລາທີ່ຂະບວນການສໍາເລັດ. ຫຼືກ່ອນການຈັດສົ່ງເອກະສານ ພວກເຮົາຈະແຈ້ງໃຫ້ທ່ານຊາບຢ່າງຈະແຈ້ງກ່ຽວກັບລາຍລະອຽດກ່ອນທີ່ຈະເລີ່ມເຮັດ.</span>
        </div>
        <div>
          <p className='mt-3 font-bold'>6. ຖ້າກໍລະນີເລັ່ງດ່ວນ, ຂ້ອຍສາມາດເຮັດດ່ວນໄດ້ບໍ?</p>
          <span>ແມ່ນແລ້ວ, ພວກເຮົາມີບໍລິການດ່ວນທີ່ສາມາດເຮັດໄດ້ພາຍໃນ 1-2 ມື້, ຂຶ້ນກັບປະເພດເອກະສານ. ກະລຸນາຕິດຕໍ່ພວກເຮົາຜ່ານ Line ຫຼືໂທລະສັບເພື່ອກວດສອບຄິວທັນທີ.</span>
        </div>
      </div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
        )}
      />
    </Card>
  )
}

export default Faquestion
