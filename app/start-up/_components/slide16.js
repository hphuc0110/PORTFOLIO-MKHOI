"use client";
import star from "@/public/icon/star.png";
import Image from "next/image";
import section51 from "@/public/img/startup/section51.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STAGGER, TRANSITION_DOWN, TRANSITION_LEFT } from "@/constant/motion";

export default function Slide16() {
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
        <div className="text-2xl xl:text-4xl font-semibold mt-20 text-white flex flex-col gap-2">
          <div>
            LEARN ON DEMAND, NO NEED
            <br />
            TO ENROLL IN A FULL COURSE.
          </div>
        </div>
        <div className="p-24 pt-12 flex w-full h-full relative">
          <Image
            src={section51}
            fill
            objectFit="contain"
            className="rounded-2xl"
            alt="section41"
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
