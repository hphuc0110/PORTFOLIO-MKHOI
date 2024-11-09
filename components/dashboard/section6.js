"use client";
import star from "@/public/icon/star.png";
import Image from "next/image";
import Link from "next/link";
import section62 from "@/public/img/dashboard/section62.png";
import { TRANSITION_LEFT } from "@/constant/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Section6() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
    once: true,
  });
  return (
    <section
      ref={ref}
      className="snap-start snap-always relative bg-[url(/img/dashboard/bgsection6.png)] bg-cover bg-center pt-32 px-16 xl:px-24 pb-12                                                                                       overflow-hidden transition-all"
    >
      <div className="flex flex-wrap justify-center gap-8 xl:gap-10 2xl:gap-12 xl:content-end ">
        <div className="flex flex-col lg:max-w-[890px] h-fit  lg:gap-10 text-lg lg:text-lg xl:text-xl text-center">
          <div className="text-3xl font-semibold bg-gradient-to-r from-blue-700 to-blue-400 inline-block text-transparent bg-clip-text">
            Therefore, my life is always full of new stories and challenges
            waiting to be faced.
          </div>
          <div className="text-white">
            Never have I been felt trapped in one direction, since I can always
            change, adapt, and rewrite again, knowing that each chapter would be
            another chance to write, and to grow.
          </div>
          <div className="text-white">
            I will pursue each venture until the very end, fully immersing
            myself in the experience to discover how far I can go. Here lies a
            collection of my drafts - each one was unpolished, but each was
            mine.
          </div>
        </div>
        <Link href="/coding-project">
          <div className="text-center w-[250px] min-h-[300px] h-full font-semibold bg-[url('/img/dashboard/section61.png')] rounded-3xl bg-cover bg-center"></div>
        </Link>
        <Link href="/start-up">
          <div className="text-center w-[250px] min-h-[300px] h-full font-semibold bg-[url('/img/dashboard/section62.png')] rounded-3xl bg-cover bg-center"></div>
        </Link>
        <Link href="/volunteer-project">
          <div className="text-center w-[250px] min-h-[300px] h-full font-semibold bg-[url('/img/dashboard/section63.png')] rounded-3xl bg-cover bg-center"></div>
        </Link>
        <Link href="/photography">
          <div className="text-center w-[250px] min-h-[300px] h-full font-semibold bg-[url('/img/dashboard/section64.png')] rounded-3xl bg-cover bg-center"></div>
        </Link>
        <Link href="/culture-preservation">
          <div className="text-center w-[250px] min-h-[300px] h-full font-semibold bg-[url('/img/dashboard/section65.png')] rounded-3xl bg-cover bg-center"></div>
        </Link>
      </div>
      <motion.div
        animate={isInView ? "visible" : "hidden"}
        variants={TRANSITION_LEFT}
        className="absolute bottom-[50px] left-[30px]"
      >
        <Image src={star} width={150} height={150} alt="star" />
      </motion.div>
    </section>
  );
}
