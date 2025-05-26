'use client'

import Navbar from "@/app/Navbar";

export default function RootClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <div className="flex flex-1 flex-col">
                <Navbar />
                <div className="flex flex-1 overflow-hidden">
                    <main className="flex-1 overflow-auto p-4">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
