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
import section2Content from "@/public/img/dashboard/ContentCTA.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Section2() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
    once: true,
  });

  return (
    <section
      ref={ref}
      className="snap-start snap-always h-screen relative"
      style={{ backgroundColor: "#212121" }}
    >
      <motion.div
        variants={STAGGER}
        animate={isInView ? "visible" : "hidden"}
        className="flex h-screen justify-center items-center relative"
      >
        <motion.div variants={TRANSITION_SCALE} className="h-fit">
          <Image
            src={section2Content}
            objectFit="contain"
            alt="section2Content"
          />
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
