"use client";
import star from "@/public/icon/star.png";
import Image from "next/image";
import Link from "next/link";
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
      className="snap-start snap-always min-h-screen relative bg-[url(/img/dashboard/bgsection6.png)] bg-cover bg-center pt-32 px-16 xl:px-24 pb-12 overflow-hidden transition-all flex flex-col items-center"
    >
      {/* Khối văn bản */}
      <div className="flex flex-col lg:max-w-[890px] h-fit lg:gap-10 text-lg lg:text-lg xl:text-xl text-center mb-12">
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

      {/* Danh sách ảnh có hiệu ứng hover */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 xl:gap-10 2xl:gap-12 justify-center">
        {[
          { href: "/coding-project", img: "section61.png" },
          { href: "/start-up", img: "section62.png" },
          { href: "/volunteer-project", img: "section63.jpg" },
          { href: "/photography", img: "section64.png" },
          { href: "/culture-preservation", img: "section65.png" },
        ].map((item, index) => (
          <Link href={item.href} key={index}>
            <motion.div
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.25 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-[250px] h-[300px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Ảnh nền */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(/img/dashboard/${item.img})`,
                }}
              ></div>

              {/* Overlay mờ */}
              <motion.div
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 0.5 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white z-10"
              ></motion.div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Icon ngôi sao */}
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
