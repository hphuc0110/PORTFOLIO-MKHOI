"use client";
import Image from "next/image";
import section111 from "@/public/img/coding/section11-1.jpg";
import section112 from "@/public/img/coding/section11-2.png";
import section113 from "@/public/img/coding/section11-3.png";
import section114 from "@/public/img/coding/section11-4.png";
import star from "@/public/icon/star.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TRANSITION_LEFT } from "@/constant/motion";

export default function Section11() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
    once: true,
  });
  return (
    <section ref={ref} className="snap-start h-screen bg-space overflow-auto">
      <div className="gap-3 h-screen flex flex-col  text-center relative">
        <div className="text-2xl lg:text-4xl font-semibold mt-20 text-white flex flex-col gap-2">
          <div>Take a snapshot of the</div>
          <div>App's UI Design</div>
        </div>
        <div className="text-white flex flex-wrap h-full justify-center mt-10 p-10 xl:p-20 pt-0 xl:pt-0 gap-4">
          <div className="flex flex-col flex-1 h-full min-w-[200px] gap-4">
            <div className="w-full h-full relative">
              <Image
                src={section111}
                fill
                objectFit="contain"
                alt="section111"
              />
            </div>
            <div>log in screen</div>
          </div>
          <div className="flex flex-col flex-1 h-full min-w-[200px] gap-4">
            <div className="w-full h-full relative">
              <Image
                src={section112}
                fill
                objectFit="contain"
                alt="section112"
              />
            </div>
            <div>option</div>
          </div>

          <div className="flex flex-col flex-1 h-full min-w-[200px] gap-4">
            <div className="w-full h-full relative">
              <Image
                src={section113}
                fill
                objectFit="contain"
                alt="section113"
              />
            </div>
            <div>tracking order</div>
          </div>
          <div className="flex flex-col  flex-1 h-full min-w-[200px] gap-4">
            <div className="w-full h-full relative">
              <Image
                src={section114}
                fill
                objectFit="contain"
                alt="section114"
              />
            </div>
            <div>tracking order (guest screen)</div>
          </div>
        </div>
        <motion.div
          animate={isInView ? "visible" : "hidden"}
          variants={TRANSITION_LEFT}
          className="absolute top-[30px] -left-0"
        >
          <Image src={star} width={150} height={150} alt="star" />
        </motion.div>
      </div>
    </section>
  );
}
