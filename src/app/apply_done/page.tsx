'use client'

import React, { useEffect, useRef, useState } from 'react'
import ApplyDone from '@/components/Apply-Done'
import { Particles } from '@/components/magicui/particles'
import { useTheme } from 'next-themes';
import { Confetti, type ConfettiRef } from '@/components/magicui/confetti';

const Apply_done = () => {

  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const confettiRef = useRef<ConfettiRef>(null);

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className='flex justify-center items-center h-screen'>
      <ApplyDone />
      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={100}
        color={color}
        refresh
      />
    </div>
  )
}

export default Apply_done
