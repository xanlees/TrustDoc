'use client'

import React from 'react'
import { FaFacebookMessenger, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { Dock, DockIcon } from './magicui/dock'

function Footer() {

    return (
        <>
        <div className=' border-t bg-background py-20 p-10 mt-10'>
            <div className='container mx-auto max-w-[1320px] md:px-10'>
                <div className=' grid grid-cols-1 m-10 md:m-0 md:grid-cols-2'>
                    <div>
                        {/* <Image src={logofooter} alt="" /> */}
                        <p className='my-0 text-xl font-semibold text-yellow-500'>
                            📞 ສົນໃຈໃຊ້ບໍລິການບໍ? <br />
                        </p>
                        <ul>
                            <li className='mt-2'><a className=' text-[0.875rem]' href="">📞 ໂທ: 020 92351270</a></li>
                            <li className='mt-2'><a className=' text-[0.875rem]' href="">📞 ໂທ: 020 92350299</a></li>
                            <li className='mt-2'><a className=' text-[0.875rem]' href="">✉️ ອີເມວ: meejthojxkh@gmail.com</a></li>
                        </ul>
                        <div className=" relative mb-5 md:flex-row -translate-x-7 sm:-translate-x-10 md:-translate-x-36 lg:-translate-x-36 xl:-translate-x-48 -translate-y-5">
                            <Dock iconMagnification={60} iconDistance={100}>
                                <DockIcon className="bg-black/10 dark:bg-white/10">
                                    <a className=' text-[1.5rem]' href="https://m.me/713991511787931?source=qr_link_share"><FaFacebookMessenger className='text-blue-600' /></a>
                                </DockIcon>
                                <DockIcon className="bg-black/10 dark:bg-white/10">
                                    <a className=' text-[1.5rem]' href="https://www.facebook.com/share/1APsdACvi9/"><FaFacebook className='text-blue-500' /></a>
                                </DockIcon>
                                <DockIcon className="bg-black/10 dark:bg-white/10">
                                    <a className=' text-[1.5rem]' href="https://wa.me/message/LUVES6KQY3GHN1"><FaWhatsapp className='text-green-500' /></a>
                                </DockIcon>
                            </Dock>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer