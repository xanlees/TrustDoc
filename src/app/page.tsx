'use client';

import Header from "@/components/Header";
import Article from "@/components/Article";
import { MarqueeDetail3D } from "@/components/Client";
import Service from "@/components/Service";
import Faquestion from "@/components/Faquestion";
import Footer from "@/components/Footer";
import Personal from "@/components/Personal";
import Head from 'next/head';
import { useEffect, useRef, useState } from "react";
import ImageInformation from "@/components/ImageInformation";
import References from "@/components/References";
import { AnimatedCircularProgressBarDemo } from "./Progress";
import { Confetti } from "@/components/magicui/confetti";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const confettiRef = useRef(null);

  // Reset loading state on component mount (every refresh)
  useEffect(() => {
    const handleLoading = () => {
      setLoading(true); // Set loading to true initially
      setTimeout(() => {
        setLoading(false); // Disable loading after 3 seconds
      }, 3000);
    };

    handleLoading();
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <>
      <Head>
        <title>TrustDoc</title>
        <link rel="icon" href="/TrustDoc.png?v=1" />
      </Head>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <AnimatedCircularProgressBarDemo />
          <Confetti
            ref={confettiRef}
            className="absolute left-0 top-0 z-0 size-full"
            onMouseEnter={() => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (confettiRef.current as any)?.fire({});
            }}
          />
        </div>
      ) : (
        <>
          <Header />
          <Article />
          <MarqueeDetail3D />
          <Service />
          <Faquestion />
          <Personal />
          <ImageInformation />
          <References />
          <Footer />
        </>
      )}
    </>
  );
}