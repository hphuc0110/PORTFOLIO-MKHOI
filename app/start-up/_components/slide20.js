"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STAGGER, TRANSITION_DOWN, TRANSITION_LEFT } from "@/constant/motion";
import star from "@/public/icon/star.png";
import Image from "next/image";
import section91 from "@/public/img/startup/section91.png";
import section92 from "@/public/img/startup/section92.png";

export default function Slide20() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
    once: true,
  });
  return (
    <motion.section
      variants={STAGGER}
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
      className="snap-start h-screen bg-space relative"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen  flex flex-col items-center text-center relative pb-12">
        <div className="text-2xl xl:text-4xl font-semibold mt-10 text-white flex flex-col gap-4">
          <div>THIS PRODUCT IS BEST-SUITED FOR</div>
          <div>IT workers</div>
        </div>
        <div className="flex flex-wrap w-full justify-evenly h-full gap-12 text-white xl:mt-24">
          <div className="flex flex-col items-center gap-4 flex-1 h-full">
            <div className="w-full max-h-[400px] h-full relative">
              <Image
                src={section91}
                fill
                objectFit="contain"
                className="rounded-2xl"
                alt="section91"
              />
            </div>
            <div>
              IT Interview Practice and Mock Interviews with IT Professionals
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 flex-1 h-full">
            <div className="w-full max-h-[400px] h-full relative">
              <Image
                src={section92}
                fill
                objectFit="contain"
                className="rounded-2xl"
                alt="section92"
              />
            </div>
            <div>Customized IT English learning paths</div>
          </div>
        </div>
      </div>
      <motion.div
        variants={TRANSITION_LEFT}
        className="absolute top-[30px] -left-0"
      >
        <Image src={star} width={150} height={150} alt="star" />
      </motion.div>
    </motion.section>
  );
}
