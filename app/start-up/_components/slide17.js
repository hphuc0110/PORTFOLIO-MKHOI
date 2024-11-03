"use client";
import star from "@/public/icon/star.png";
import Image from "next/image";
import section61 from "@/public/img/startup/section61.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STAGGER, TRANSITION_DOWN, TRANSITION_LEFT } from "@/constant/motion";

export default function Slide17() {
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
      className="snap-start h-screen bg-space relative "
    >
      <div className="gap-8 h-screen flex flex-col items-center text-center py-12">
        <div className="p-12 pt-0  flex w-full h-full relative xl:mt-24">
          <Image
            src={section61}
            fill
            objectFit="contain"
            className="rounded-2xl"
            alt="section61"
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
