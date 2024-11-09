"use client";
import star from "@/public/icon/star.png";
import section8 from "@/public/img/dashboard/section8.jpg";
import Image from "next/image";
import { TRANSITION_LEFT } from "@/constant/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bgSection7 from "@/public/img/dashboard/bgsection7.png";
import quote from "@/public/icon/quote.svg";

export default function Section7() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
    once: true,
  });
  return (
    <section
      ref={ref}
      className="snap-start snap-always w-full bg-star bg-black flex flex-col items-center justify-center transition-all relative"
    >
      <div className="rounded-xl w-full h-full flex flex-col xl:flex-row text-white z-10  bg-[url(/img/dashboard/bgsection7.png)] bg-cover bg-center px-12 sm:px-24 py-32">
        <div className="flex flex-col text-xl gap-6 max-w-[816px] h-fit rounded-3xl p-5 sm:p-10 backdrop-blur-md border-slate-700 border">
          <div className="flex justify-between items-end">
            <div className="text-blue-500 text-2xl font-semibold">
              GIA KHANG
            </div>
            <Image src={quote} alt="quote" />
          </div>
          <div className="text-3xl font-semibold">
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
