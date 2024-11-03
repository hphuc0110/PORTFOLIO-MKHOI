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
      className="snap-start h-screen snap-always relative bg-space pt-32 px-16 xl:px-40 overflow-hidden transition-all"
    >
      <div className="grid grid-cols-4 gap-8 xl:gap-10 2xl:gap-12 xl:content-end ">
        <div className="text-white col-span-2 flex flex-col h-fit gap-10 text-lg lg:text-lg xl:text-xl font-semibold">
          <div>
            Therefore, my life is always full of new stories and challenges
            waiting to be faced. Never have I been felt trapped in one
            direction, since I can always change, adapt, and rewrite again,
            knowing that each chapter would be another chance to write, and to
            grow.
          </div>
          <div>
            I will pursue each venture until the very end, fully immersing
            myself in the experience to discover how far I can go. Here lies a
            collection of my drafts - each one was unpolished, but each was
            mine.
          </div>
        </div>
        <Link href="/coding-project">
          <div className="text-center h-[250px] font-semibold bg-[url('/img/dashboard/section61.png')] rounded-md bg-cover bg-no-repeat bg-center">
            <div className="py-3  rounded-tr-md rounded-tl-md bg-white">
              <div>Coding Projects</div>
            </div>
          </div>
        </Link>
        <Link href="/start-up">
          <div className="text-center h-[250px] font-semibold bg-white rounded-md bg-cover bg-no-repeat bg-center">
            <div className="py-3  rounded-tr-md rounded-tl-md bg-white">
              <div>My Start-up: GrabStudy</div>
            </div>
            <div className="flex mt-10  justify-center">
              <Image width={100} height={100} src={section62} alt="section62" />
            </div>
          </div>
        </Link>
        <Link href="/volunteer-project" className=" col-end-3">
          <div className=" text-center h-[250px] font-semibold bg-[url('/img/dashboard/section63.png')] rounded-md bg-cover bg-no-repeat bg-center">
            <div className="py-3  rounded-tr-md rounded-tl-md bg-white">
              <div>Volunteer Projects</div>
            </div>
          </div>
        </Link>
        <Link href="/photography">
          <div className="col-end-4 text-center h-[250px] font-semibold bg-[url('/img/dashboard/section64.png')] rounded-md bg-cover bg-no-repeat bg-center">
            <div className="py-3  rounded-tr-md rounded-tl-md bg-white">
              <div>Photography</div>
            </div>
          </div>
        </Link>
        <Link href="/culture-preservation">
          <div className="col-end-5 text-center h-[250px] font-semibold bg-[url('/img/dashboard/section65.png')] rounded-md bg-cover bg-no-repeat">
            <div className="py-3  rounded-tr-md rounded-tl-md bg-white">
              <div>Culture Preservation</div>
            </div>
          </div>
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
