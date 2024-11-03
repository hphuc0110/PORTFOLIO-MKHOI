"use client";
import star from "@/public/icon/star.png";
import section8 from "@/public/img/dashboard/section8.jpg";
import Image from "next/image";
import { TRANSITION_LEFT } from "@/constant/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section7() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
    once: true,
  });
  return (
    <section
      ref={ref}
      className="snap-start snap-always bg-space h-screen flex items-center justify-center transition-all relative"
    >
      <div className="bg-white rounded-xl flex flex-col xl:flex-row">
        <div className="flex flex-col text-xl gap-6 max-w-[600px] p-10">
          <div className="text-3xl">
            Perhaps one day, I will bring closure to all the things I’ve begun.
          </div>
          <div>
            What now may seem like mere drafts, I refuse to discard into the
            abyss.
          </div>
          <div>
            But now, I cherish the moments spent in this liminal space. Since I
            know that I always have the opportunity to attempt again, to
            approach things differently, to start anew. Because sometimes, the
            most captivating stories are those that remain
          </div>
        </div>
        <div className="md:h-[400px] xl:h-[400px] xl:w-[400px] relative">
          <Image
            src={section8}
            className="xl:rounded-tr-xl rounded-br-xl xl:rounded-bl-none md:rounded-bl-xl"
            fill
            alt="section8"
          />
        </div>
      </div>
      <motion.div
        animate={isInView ? "visible" : "hidden"}
        variants={TRANSITION_LEFT}
        className="absolute top-[30px] -right-0"
      >
        <Image src={star} width={150} height={150} alt="star" />
      </motion.div>
    </section>
  );
}
