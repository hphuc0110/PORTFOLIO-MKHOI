"use client";
import ArrowDown from "@/public/icon/arrow-down.svg";
import ArrowUp from "@/public/icon/arrow-up.svg";
import star3 from "@/public/icon/star-3.png";
import star from "@/public/icon/star.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  STAGGER,
  TRANSITION_DOWN,
  TRANSITION_LEFT,
  TRANSITION_RIGHT,
  TRANSITION_UP,
} from "@/constant/motion";
import { useRef } from "react";
export default function Section5() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
    once: true,
  });
  return (
    <section
      ref={ref}
      className="snap-start h-screen snap-always relative bg-space bg-repeat flex flex-col items-center pt-32 px-16 gap-10"
    >
      <div className="text-white text-3xl font-semibold w-fit text-center">
        For the longest time, I saw
        <br /> these unfinished stories and
        <br /> shattered pieces as FAILURES.
      </div>
      <motion.div
        variants={STAGGER}
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col gap-4 font-semibold"
      >
        <motion.div
          variants={TRANSITION_UP}
          className="bg-white min-w-[500px] flex justify-between items-center rounded-lg gap-4 p-3"
        >
          <Image width={32} height={32} src={star3} alt="star3" />
          <div>
            Why could I never just commit to one thing, devote myself entirely
            to a single ultimate goal?
          </div>
          <div className="bg-slate-300 rounded-full p-2 text-white">
            <Image src={ArrowUp} alt="arrow-up" />
          </div>
        </motion.div>
        <motion.div
          variants={TRANSITION_UP}
          className="bg-white w-full flex justify-between items-center rounded-lg gap-4 p-3"
        >
          <Image width={32} height={32} src={star3} alt="star3" />
          <div>
            Why couldn’t I define, with clarity, what I truly love and let
            everything I do revolve around that single axis?
          </div>
          <div className="bg-slate-300 rounded-full p-2 text-white">
            <Image src={ArrowDown} alt="arrow-up" />
          </div>
        </motion.div>
        <motion.div
          variants={TRANSITION_UP}
          className="bg-white w-full flex justify-between items-center rounded-lg gap-4 p-3"
        >
          <Image width={32} height={32} src={star3} alt="star3" />
          <div>Why am I drawn to things that seem worlds apart?</div>
          <div className="bg-slate-300 rounded-full p-2 text-white">
            <Image src={ArrowDown} alt="arrow-up" />
          </div>
        </motion.div>
        <motion.div
          variants={TRANSITION_UP}
          className="bg-white w-full flex justify-between items-center rounded-lg gap-4 p-3"
        >
          <Image width={32} height={32} src={star3} alt="star3" />
          <div>
            Why do I relish trying them, even if they may never lead to what
            most would call "success"?
          </div>
          <div className="bg-slate-300 rounded-full p-2 text-white">
            <Image src={ArrowDown} alt="arrow-up" />
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        animate={isInView ? "visible" : "hidden"}
        variants={TRANSITION_LEFT}
        className="absolute bottom-[30px] -right-0"
      >
        <Image src={star} width={150} height={150} alt="star" />
      </motion.div>
      <motion.div
        animate={isInView ? "visible" : "hidden"}
        variants={TRANSITION_LEFT}
        className="absolute top-[30px] -left-0"
      >
        <Image src={star} width={150} height={150} alt="star" />
      </motion.div>
    </section>
  );
}
