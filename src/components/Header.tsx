/* eslint-disable @typescript-eslint/no-require-imports */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import work from '../../public/assets/img/work.png';
import wallet from '../../public/assets/img/wallet.png';
import Image from 'next/image';
import { Card } from './ui/card';
import { useTranslation } from 'next-i18next';
import { BorderBeam } from './magicui/border-beam';
import { Ripple } from './magicui/ripple';
import { GridPattern } from './magicui/grid-pattern';
import { cn } from '@/lib/utils';
import { SparklesText } from './magicui/sparkles-text';
import { BoxReveal } from './magicui/box-reveal';

function Header() {
    const typewriterRef = useRef(null);
    const { t } = useTranslation('common');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initialize AOS (Animation On Scroll)
        AOS.init({
            duration: 1200, // animation duration in ms
            once: true, // whether animation should happen only once
        });

        // Set loading state for 1.5 seconds
        const handleLoading = () => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        };

        handleLoading();
    }, []);

    useEffect(() => {
        // Initialize Typewriter only when loading is complete
        if (!loading && typewriterRef.current) {
            const Typewriter = require('typewriter-effect/dist/core'); // Dynamic import
            new Typewriter(typewriterRef.current, {
                strings: [
                    'ໜັງສືຜ່ານແດນ',
                    'ວິຊ່າ',
                    'ໃບແຕ່ງງານ',
                    'ໃບຂັບຂີ່',
                    'ໃບຂັບຂີ່ສາກົນ',
                ],
                autoStart: true,
                loop: true,
            });
        }
    }, [loading]); // Trigger Typewriter initialization after `loading` changes to false

    return (
        <>
                <Card className="relative h-auto flex flex-col items-center px-4 md:px-10 md:mt-32 mt-10 overflow-hidden">
                    <div className="container mx-auto max-w-[1320px] flex flex-col lg:flex-row justify-center items-center gap-10">
                        {/* Text Section */}
                        <div className="w-full flex flex-col items-center text-center">
                            <div className="flex gap-2 items-center justify-center">
                                <Image
                                    src={wallet}
                                    alt="wallet"
                                    className="w-10 h-10"
                                />
                                <h1
                                    className="mt-3 text-3xl sm:text-4xl md:text-[2.5rem] leading-tight font-semibold text-yellow-500"
                                    data-aos="fade-right"
                                >
                                    {t('ຍີນດີຕ້ອນຮັບສູ່')}
                                </h1>
                                <span className="font-semibold text-yellow-500">
                                <SparklesText className='text-[1.5rem]'>(TrustDoc)</SparklesText>
                                </span>

                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4 sm:mt-6">
                                <h2 className="text-xl mt-2 sm:text-2xl">
                                    {t('ຮັບແລ່ນ')}:
                                </h2>
                                <span className="text-xl sm:text-2xl font-bold bg-amber-300 p-2 rounded-md">
                                    <span ref={typewriterRef} />
                                </span>
                            </div>

                            <div className="mt-5 text-sm sm:text-base px-4">
                                <BoxReveal>
                                <span className="font-bold text-[1.2rem]">
                                    ✅ການ​ບໍ​ລິ​ການ​ຈັດ​ການ​ເອ​ກະ​ສານ​ສໍາ​ເລັດ - ສະ​ດວກ​, ໄວ​ແລະ​ປອດ​ໄພ
                                </span>                                  
                                </BoxReveal>
                                <br />
                                <BoxReveal>
                                <span className="">
                                ບໍ່ວ່າຈະເຮັດໜັງສືຜ່ານແດນ ວີຊ່າທ່ອງທ່ຽວ, ໃບຂັບຂີ່ສາກົນ ຫຼື ໃບທະບຽນການແຕ່ງງານກັບຄົນຕ່າງປະເທດ ພວກເຮົາພ້ອມຊ່ວຍທ່ານທຸກຂັ້ນຕອນ. ດ້ວຍປະສົບການແລະການດູແລ.
                                </span>                                  
                                </BoxReveal>
                            </div>
                        </div>


                        {/* Image Section */}
                        <div className="w-full flex justify-center">
                            <div className="w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[420px] md:h-[420px] bg-gradient-to-b border-[15px] border-white border-b-[50px] shadow-[6px_6px_15px_rgba(0,0,0,0.5)] -rotate-[5deg] overflow-hidden">
                                <Image
                                    className="w-[250px] h-[280px] sm:w-[260px] sm:h-[300px] translate-y-10 md:translate-x-16 drop-shadow-[6px_0_4px_rgba(0,0,0,0.4)]"
                                    src={work}
                                    alt="HeaderImg"
                                />
                                <Ripple />

                            </div>
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
                            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                        )}
                    />
                </Card>
        </>
    );
}

export default Header;