"use client";
import section31 from "@/public/img/dashboard/section31.png";
import section32 from "@/public/img/dashboard/section32.png";
import section33 from "@/public/img/dashboard/section33.png";
import section34 from "@/public/img/dashboard/section34.png";
import section35 from "@/public/img/dashboard/section35.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  STAGGER,
  TRANSITION_FADE,
  TRANSITION_LEFT,
  TRANSITION_RIGHT,
} from "@/constant/motion";
import { useRef } from "react";

export default function Section3() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
    once: true,
  });
  return (
    <section
      ref={ref}
      className="snap-start snap-always h-screen py-10 relative"
      style={{
        background: "#07080C",
      }}
    >
      <div
        className="text-white flex justify-center items-center"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        <div className="flex flex-col gap-16">
          <motion.div
            initial={TRANSITION_FADE}
            animate={isInView ? "visible" : "hidden"}
            className="text-xl lg:text-2xl "
          >
            In some inexplicable way, I was born to be a{" "}
            <strong>collection of broken pieces</strong>: I have{" "}
            <strong>A LOVE OF SPORTS</strong>,<br /> something raw and rugged,
            HOWEVER, at the same time, I’m drawn to{" "}
            <strong>
              CRAFTING POETRY AND
              <br />
              CAPTURING MOMENTS
            </strong>{" "}
            in photos—something soft and dreamlike.
          </motion.div>
          <div className="flex flex-col gap-4">
            <motion.div
              initial={STAGGER}
              animate={isInView ? "visible" : "hidden"}
              className="flex gap-4"
            >
              <motion.div
                variants={TRANSITION_LEFT}
                className="flex-1 max-w-[385px] max-h-[337px] relative"
              >
                <Image src={section31} className="rounded-xl" alt="section31" />
              </motion.div>
              <motion.div
                variants={TRANSITION_LEFT}
                className="flex-1 max-w-[385px] max-h-[337px] relative"
              >
                <Image src={section32} className="rounded-xl" alt="section32" />
              </motion.div>
              <motion.div
                variants={TRANSITION_LEFT}
                className="flex-1 max-w-[397px] max-h-[337px] relative"
              >
                <Image src={section33} className="rounded-xl" alt="section33" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={STAGGER}
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-4 "
            >
              <motion.div
                variants={TRANSITION_RIGHT}
                className="flex-1 max-w-[749px] max-h-[337px] relative"
              >
                <Image src={section34} className="rounded-xl" alt="section31" />
              </motion.div>
              <motion.div
                variants={TRANSITION_RIGHT}
                className="flex-1 max-w-[443px] max-h-[337px] relative"
              >
                <Image src={section35} className="rounded-xl" alt="section32" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
