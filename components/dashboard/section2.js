"use client";
import {
  STAGGER,
  TRANSITION_DOWN,
  TRANSITION_LEFT,
  TRANSITION_SCALE,
  TRANSITION_UP,
} from "@/constant/motion";
import planet from "@/public/icon/planet.png";
import star from "@/public/icon/star.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SwitchUp from "@/public/img/dashboard/switchUp.svg";
import DashLine from "@/public/img/dashboard/dashLine.svg";

export default function Section2() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
    once: true,
  });

  return (
    <section
      ref={ref}
      className="snap-start snap-always bg-star bg-contain h-screen bg-black relative"
    >
      <motion.div
        variants={STAGGER}
        animate={isInView ? "visible" : "hidden"}
        className="flex h-screen justify-center items-center relative"
      >
        <motion.div
          variants={TRANSITION_SCALE}
          className="h-full w-full text-white text-xs sm:text-2xl z-10 flex items-center justify-center px-5 sm:px-20"
        >
          <div className="p-6 lg:p-10 bg-transparent backdrop-blur-sm border-white border shadow-[0_0px_30px_rgba(8,_112,_184,_0.7)] rounded-3xl">
            <div className="lg:pl-10">
              In some hidden corner of mind,
              <br />
              there lie
              <span className="text-blue-500 pl-2 font-semibold">
                fragmented stories:
              </span>
            </div>
            <div className="flex sm:gap-1 text-blue-500 font-semibold align-top pt-2 sm:pt-5">
              <div className="max-w-[20px] w-full min-h-[10px] sm:min-h-[30px] h-full mt-1 relative">
                <Image src={SwitchUp} fill alt="switchUp" />
              </div>
              <p className="text-sm sm:text-4xl">FROM</p>
              <div className="relative mr-10 sm:mr-20">
                <Image src={DashLine} alt="dashLine" />
              </div>
            </div>
            <div className="lg:pl-10 flex justify-between">
              <p>
                “<strong>verses</strong> scrawled in passing,{" "}
                <strong>lacking any clear ending</strong>”
              </p>
              <div className="flex sm:gap-1">
                <p className="text-sm sm:text-4xl text-blue-500 font-semibold">
                  TO
                </p>
                <div className="w-[10px] sm:w-[20px] min-h-[10px] sm:min-h-[30px] h-full mt-0 relative">
                  <Image src={SwitchUp} fill alt="switchUp" />
                </div>
              </div>
            </div>
            <div className="mt-2 flex lg:justify-end pr-4">
              “lines of code that might never fit into any particular project
              <br />
              (it’s simply that I love the act of coding itself, beyond any
              reason)”
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={TRANSITION_LEFT}
          className="absolute top-0 left-0"
        >
          <Image src={star} width={150} height={150} alt="star" />
        </motion.div>
        <motion.div
          variants={TRANSITION_LEFT}
          className="absolute bottom-[50px] left-[30px]"
        >
          <Image src={star} width={150} height={150} alt="star" />
        </motion.div>
        <motion.div
          variants={TRANSITION_UP}
          className="absolute bottom-[30px] -right-0"
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
