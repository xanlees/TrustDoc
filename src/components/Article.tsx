'use client'

import React from 'react'
import { Card } from './ui/card'
import { BorderBeam } from './magicui/border-beam'
import { GridPattern } from './magicui/grid-pattern'
import { cn } from '@/lib/utils'

function Article() {
    return (
        <Card className='relative mx-auto max-w-[1320px] mt-10 p-10 overflow-hidden'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
                <div className=" items-center justify-center mt-10">
                    <h2 className="text-xl font-bold text-yellow-500">✅ ເປັນຫຍັງລູກຄ້າເລືອກພວກເຮົາ?</h2> <br />
                    <ul className='list-disc list-inside'>
                        <li>📄 ກະກຽມເອກະສານຄົບ, ຄົບຖ້ວນຢູ່ບ່ອນດຽວ.
                            <span className=''> ພວກເຮົາດູແລທຸກຂັ້ນຕອນຕັ້ງແຕ່ໃຫ້ຄໍາແນະນໍາ, ກະກຽມເອກະສານ, ຈອງນັດແລະຕິດຕາມຜົນ.</span>
                        </li>
                        <li>🕒 ໄວ ແລະ ທັນເວລາ
                            <span className=''> ດຳເນີນການ​​ທັນ​ທີ​ພ້ອມ​ທີ່​ຈະ​ປັບ​ປຸງ​ໃຫ້​ທ່ານ​ກ່ຽວ​ກັບ​ສະ​ຖາ​ນະ​ພາບ​ຕະ​ຫຼອດ​ຂະ​ບວນ​ການ ແລະ ປະຫຍັດເວລາ, ບໍ່ຈໍາເປັນຕ້ອງແລ່ນຍຶ່ນເອກະສານເອງ​.</span>
                        </li>
                        <li>👩‍💼 ຜູ້ຊ່ຽວຊານດ້ານເອກະສານໂດຍກົງ.
                            <span className=''> ທີມງານຂອງພວກເຮົາມີປະສົບການຫຼາຍກວ່າ 5 ປີໃນເອກະສານທາງການແລະສະຖານທູດ.</span>
                        </li>
                        <li>🔒 ປອດໄພ. <br />
                            <span className=''> ຂໍ້ມູນຂອງທ່ານຈະຖືກເກັບຮັກສາໄວ້ໃນສະພາບທີ່ດີທີ່ສຸດຕາມມາດຕະຖານ.</span>
                        </li>
                        <li>✅ ເອກະສານຖືກຕ້ອງ 100% ກ່ອນທີ່ຈະຍື່ນ.</li>
                        <li>✅ ບໍລິການເປັນກັນເອງ ພ້ອມໃຫ້ຄຳປຶກສາສະເໝີ.</li>
                    </ul>
                </div>
                <div className='items-center justify-center mt-10'>
                    <h2 className='text-xl font-bold text-yellow-500'>📌 ບໍລິການທີ່ນິຍົມທີ່ສຸດຂອງພວກເຮົາ</h2>
                    <br />
                    <span> - ຍື່ນຂໍວີຊາທ່ອງທ່ຽວ/ທຸລະກິດ (ເຊັ່ນ: ຍີ່ປຸ່ນ, ເກົາຫຼີ, ອາເມລິກາ, ແລະອື່ນໆ)</span><br />
                    <span> - ເຮັດໜັງສືຜ່ານແດນໃໝ່ ຫຼື ໜັງສືເສຍ</span><br />
                    <span> - ແປ ແລະ ຢັ້ງຢືນການແຕ່ງງານກັບຄົນຕ່າງປະເທດ</span><br />
                    <span> - ສະໝັກໃບຂັບຂີ່ ແລະ ໃບຂັບຂີ່ສາກົນ</span>
                </div>
            </div>
            <BorderBeam
                duration={10}
                size={200}
                colorTo='yellow'
            />
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

export default Article