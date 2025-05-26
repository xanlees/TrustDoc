'use client'

import React from 'react'
import { ModeToggle } from '../components/Theme'


function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background dark:text-white">
            <div className="flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <a href='' className="text-2xl font-bold text-yellow-600">
                    TrustDoc
                </a>
                <div className="flex-shrink-0">
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Icons */}
                    <div className="flex relative right-7 md:right-0 items-center space-x-2">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar