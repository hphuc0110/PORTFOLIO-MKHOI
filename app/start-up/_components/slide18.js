"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STAGGER, TRANSITION_DOWN, TRANSITION_LEFT } from "@/constant/motion";
import star from "@/public/icon/star.png";
import Image from "next/image";
import section7 from "@/public/img/startup/section7.png";

export default function Slide18() {
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
      className="snap-start h-screen bg-space relative overflow-auto"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col items-center text-center relative pb-12">
        <div className="text-2xl xl:text-4xl font-semibold mt-10 text-white flex flex-col gap-4">
          <div>METHOD OF TEACHING:</div>
          <div>“LEARN HISTORY, GEOGRAPHY, SOCIAL</div>
          <div>KNOWLEDGE" IN ENGLISH</div>
        </div>
        <div className="p-12 pt-0 flex w-full h-full relative">
          <Image
            src={section7}
            fill
            objectFit="contain"
            className="rounded-2xl"
            alt="section7"
          />
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
