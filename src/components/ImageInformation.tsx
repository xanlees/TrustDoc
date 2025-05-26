
import React from 'react'
import { Card } from './ui/card'
import { BorderBeam } from './magicui/border-beam'
import { GridPattern } from './magicui/grid-pattern'
import { cn } from '@/lib/utils'
import { IconCloud } from './magicui/icon-cloud'


const countries = [
    "la", // Laos
    "th", // Thailand
    "vn", // Vietnam
    "kh", // Cambodia
    "mm", // Myanmar
    "cn", // China
    "jp", // Japan
    "kr", // South Korea
    "us", // USA
    "gb", // UK
    "fr", // France
    "de", // Germany
    "au", // Australia
    "ca", // Canada
    "sg", // Singapore
    "my", // Malaysia
    "ph", // Philippines
    "id", // Indonesia
];


function ImageInformation() {

    const images = countries.map(
        (code) => `https://flagcdn.com/w80/${code}.png`
    );


    return (
        <Card className=' relative mx-auto max-w-[1320px] p-10 mt-10 overflow-hidden'>
            <div className="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 ">
                <div className='flex flex-col justify-center'>
                    <p>ພວກ​ເຮົາ​ດໍາ​ເນີນ​ການ​ຕາມ​ລະ​ບຽບ​ການ​ແລະ​ຄວາມ​ຕ້ອງ​ການ​ຂອງ​ອົງ​ການ​ຈັດ​ຕັ້ງ​ທັງ​ພາຍ​ໃນ​ແລະ​ສາ​ກົນ​. <br /> ດ້ວຍຄວາມເຂົ້າໃຈກ່ຽວກັບລາຍລະອຽດທາງດ້ານກົດໝາຍ ແລະຕິດຕາມການປ່ຽນແປງນະໂຍບາຍຕ່າງໆຢ່າງໃກ້ຊິດ, ເຮັດໃຫ້ລູກຄ້າໝັ້ນໃຈວ່າເອກະສານຂອງເຂົາເຈົ້າຈະ “ຖືກຕ້ອງ, ຄົບຖ້ວນ ແລະພ້ອມທີ່ຈະສົ່ງ”.</p>
                </div>
                <div className="relative flex size-full items-center justify-center overflow-hidden">
                    <IconCloud images={images} />
                </div>
            </div>
            <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-yellow-500 to-transparent"
            />
            <BorderBeam
                duration={6}
                delay={3}
                size={400}
                className="from-transparent via-yellow-300 to-transparent"
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

export default ImageInformation
