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
      className="snap-start bg-star xl:h-full bg-contain py-10 relative bg-black"
    >
      <div
        className="text-white flex justify-center items-center"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        <div className="flex flex-col gap-16 p-5 md:px-10 lg:px-20 h-full">
          <motion.div
            initial={TRANSITION_FADE}
            animate={isInView ? "visible" : "hidden"}
            className="text-md md:text-lg lg:text-2xl text-center"
          >
            In some inexplicable way, I was born to be a{" "}
            <span className="text-blue-500">collection of broken pieces</span>:
            I have{" "}
            <span className="text-blue-500 font-semibold">
              A LOVE OF SPORTS
            </span>
            ,{/* <br /> */}
            something raw and rugged,{" "}
            <span className="text-blue-500 font-semibold">HOWEVER</span>, at the
            same time, I’m drawn to{" "}
            <span className="text-blue-500 font-semibold">
              CRAFTING POETRY AND CAPTURING
            </span>
            {/* <br /> */}
            <span className="text-blue-500 font-semibold">
              MOMENTS in photos
            </span>{" "}
            - something soft and dreamlike.
          </motion.div>

          <motion.div
            initial={STAGGER}
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col sm:grid grid-cols-2  md:grid-cols-3 gap-4 h-full "
          >
            <motion.div
              variants={TRANSITION_LEFT}
              className="w-full min-w-[300px] min-h-[300px] h-full relative"
            >
              <Image
                src={section31}
                fill
                objectFit="cover"
                className="rounded-xl"
                alt="section31"
              />
            </motion.div>
            <motion.div
              variants={TRANSITION_LEFT}
              className="w-full min-w-[300px] min-h-[300px] h-full relative"
            >
              <Image
                src={section32}
                fill
                objectFit="cover"
                className="rounded-xl"
                alt="section32"
              />
            </motion.div>
            <motion.div
              variants={TRANSITION_LEFT}
              className="w-full min-w-[300px] min-h-[300px] h-full relative"
            >
              <Image
                src={section33}
                fill
                objectFit="cover"
                className="rounded-xl"
                alt="section33"
              />
            </motion.div>

            <motion.div
              variants={TRANSITION_LEFT}
              className="min-w-[300px] min-h-[300px] w-full h-full relative"
            >
              <Image
                src={section35}
                fill
                objectFit="cover"
                className="rounded-xl"
                alt="section32"
              />
            </motion.div>
            <motion.div
              variants={TRANSITION_LEFT}
              className="col-span-2 min-w-[300px] min-h-[300px] w-full h-full relative"
            >
              <Image
                src={section34}
                fill
                objectFit="cover"
                className="rounded-xl"
                alt="section31"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
