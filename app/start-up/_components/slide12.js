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
      <Navbar color="dark" />
      <div
        className="flex w-full h-full absolute top-0"
        style={{ zIndex: -1, backgroundColor: "#212121" }}
      >
        <motion.div
          initial={TRANSITION_LEFT.hidden}
          animate={TRANSITION_LEFT.visible}
          className="w-full h-screen relative"
        >
          <Image src={banner} fill objectFit="cover" alt="banner" />
        </motion.div>
        <motion.div
          initial={TRANSITION_DOWN.hidden}
          animate={TRANSITION_DOWN.visible}
          className="absolute top-[300px] right-[100px] text-center"
        >
          <div className="text-5xl font-semibold text-amber-500">GrabStudy</div>
          <div className="mt-5 text-4xl text-white">
            A Life-Changing Solution for English
            <br /> learners in Vietnam
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={TRANSITION_LEFT.hidden}
        animate={TRANSITION_LEFT.visible}
        transition={{ delay: 1, duration: 2 }}
        className="absolute top-[150px] -left-0"
      >
        <Image src={star} width={150} height={150} alt="star" />
      </motion.div>
    </motion.section>
  );
}
