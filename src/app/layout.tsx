
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";  
import RootClientLayout from "./RootClientLayout";
import type { Metadata } from 'next'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TrustDoc',
  icons: {
    icon: '/TrustDoc.png',
    shortcut: '/TrustDoc.png',
    apple: '/TrustDoc.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/TrustDoc.png',
    },
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootClientLayout>
          {children}
          </RootClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
