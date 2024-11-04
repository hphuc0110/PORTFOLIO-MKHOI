"use client";
import Navbar from "@/components/Navbar/Navbar";

import banner from "@/public/img/startup/banner.png";
import Image from "next/image";
import star from "@/public/icon/star.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STAGGER, TRANSITION_DOWN, TRANSITION_LEFT } from "@/constant/motion";

export default function Slide12() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <motion.section
      initial={STAGGER.hidden}
      animate={STAGGER.visible}
      ref={ref}
      id="main"
      className="items-center snap-start h-screen relative"
    >
      <Navbar />
      <div className="text-3xl sm:text-6xl text-white tracking-widest h-full w-full flex flex-col text-center justify-center items-center">
        <div className="text-3xl sm:text-6xl font-semibold ">GrabStudy</div>
        <div className="mt-5 text-2xl sm:text-4xl text-white">
          A Life-Changing Solution for English
          <br /> learners in Vietnam
        </div>
      </div>
      <div className="h-full w-full absolute top-0 -z-10">
        <Image src={banner} fill objectFit="cover" alt="banner" />
      </div>
    </motion.section>
  );
}
