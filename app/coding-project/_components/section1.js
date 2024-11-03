"use client";
import Image from "next/image";
import section1Pic from "@/public/img/coding/section1.png";
import star from "@/public/icon/star.png";
import planet from "@/public/icon/planet.png";
import {
  STAGGER,
  TRANSITION_DOWN,
  TRANSITION_FADE,
  TRANSITION_LEFT,
  TRANSITION_SCALE,
} from "@/constant/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section1() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
    once: true,
  });
  return (
    <section
      ref={ref}
      className="snap-start h-screen"
      style={{ backgroundColor: "#212121" }}
    >
      <motion.div
        variants={STAGGER}
        animate={isInView ? "visible" : "hidden"}
        className="px-24 pb-24 gap-8 h-screen flex flex-col items-center text-center relative"
      >
        <div className="text-4xl font-semibold mt-20 text-white flex flex-col gap-2">
          <div>Overall Architecture of System</div>
          <div>Architecture Design</div>
        </div>
        <motion.div
          variants={TRANSITION_FADE}
          className="h-full w-full relative"
        >
          <Image
            src={section1Pic}
            fill
            objectFit="contain"
            className="rounded-3xl"
            alt="section1Pic"
          />
        </motion.div>
        <motion.div
          variants={TRANSITION_LEFT}
          className="absolute bottom-[150px] -right-0"
        >
          <Image src={star} width={150} height={150} alt="star" />
        </motion.div>
        <motion.div
          variants={TRANSITION_LEFT}
          className="absolute top-[30px] -left-0"
        >
          <Image src={star} width={150} height={150} alt="star" />
        </motion.div>
        <motion.div
          variants={TRANSITION_LEFT}
          className="absolute bottom-[200px] -left-0"
        >
          <Image src={star} width={150} height={150} alt="star" />
        </motion.div>
        <motion.div
          variants={TRANSITION_DOWN}
          className="absolute top-0 -right-0"
        >
          <Image src={planet} width={1000} height={1000} alt="star" />
        </motion.div>
      </motion.div>
    </section>
  );
}
