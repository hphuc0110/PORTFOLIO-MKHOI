"use client";
import ArrowDown from "@/public/icon/arrow-down.svg";
import ArrowUp from "@/public/icon/arrow-up.svg";
import star3 from "@/public/icon/star-3.png";
import star from "@/public/icon/star.png";
import more from "@/public/img/dashboard/more.png";
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
      className="snap-start snap-always lg:h-full relative bg-star bg-black bg-repeat flex flex-col items-center pt-32 px-16 gap-10"
    >
      <div className="text-xl sm:text-4xl font-semibold w-fit text-center bg-gradient-to-r from-blue-700 to-blue-400 inline-block text-transparent bg-clip-text">
        For the longest time, I saw these unfinished
        <br /> stories and shattered pieces as FAILURES.
      </div>
      <motion.div
        variants={STAGGER}
        animate={isInView ? "visible" : "hidden"}
        className="grid lg:grid-cols-2 gap-4 font-semibold"
      >
        <motion.div
          variants={TRANSITION_UP}
          className="bg-white px-[32px] py-[64px] rounded-tl-none rounded-3xl relative"
        >
          <Image
            width={74}
            height={44}
            src={more}
            alt="more"
            className="absolute -bottom-[25px]"
          />
          <div>
            Why could I never just commit to one thing, devote myself entirely
            to a single ultimate goal?
          </div>
        </motion.div>
        <motion.div
          variants={TRANSITION_UP}
          className="bg-white px-[32px] py-[64px] rounded-tr-none rounded-3xl relative"
        >
          <Image
            width={74}
            height={44}
            src={more}
            alt="more"
            className="absolute -bottom-[25px] right-[25px]"
          />
          <div>
            Why couldn’t I define, with clarity, what I truly love and let
            everything I do revolve around that single axis?
          </div>
        </motion.div>

        <motion.div
          variants={TRANSITION_UP}
          className="bg-white px-[32px] py-[64px] rounded-tl-none rounded-3xl relative"
        >
          <Image
            width={74}
            height={44}
            src={more}
            alt="more"
            className="absolute -bottom-[25px]"
          />
          <div>Why am I drawn to things that seem worlds apart?</div>
        </motion.div>
        <motion.div
          variants={TRANSITION_UP}
          className="bg-white px-[32px] py-[64px] rounded-tr-none rounded-3xl relative"
        >
          <Image
            width={74}
            height={44}
            src={more}
            alt="more"
            className="absolute -bottom-[25px] right-[25px]"
          />
          <div>
            Why do I relish trying them, even if they may never lead to what
            most would call "success"?
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
