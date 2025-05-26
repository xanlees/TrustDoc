
"use client";

import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { GridPattern } from './magicui/grid-pattern'
import { cn } from '@/lib/utils'

function References() {

    return (
        <Card className='relative mx-auto max-w-[1320px] mt-10 p-10 overflow-hidden'>
            <div className='text-center'>
                <h2 className='text-xl font-bold bg-yellow-500 p-2 rounded w-full'>📚 ເອກະສານອ້າງອີງ</h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 justify-center items-center'>
                <div className='flex justify-center items-center border-1 mt-5'>
                    <Image src='/personal/reeldocument.jpeg' width={350} height={10} alt='references' className='' />
                </div>

                <div className='flex justify-center items-center border-1 mt-5'>
                    <Image src='/personal/reference.png' width={350} height={10} alt='references' className='' />
                </div>
            </div>
            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                )}
            />
        </Card>
    )
}

export default References
