"use client";
import section31 from "@/public/img/dashboard/section31.webp";
import section32 from "@/public/img/dashboard/section32.webp";
import section33 from "@/public/img/dashboard/section33.webp";
import section34 from "@/public/img/dashboard/section34.webp";
import section35 from "@/public/img/dashboard/section35.webp";
import section36 from "@/public/img/dashboard/section36.webp";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  STAGGER,
  TRANSITION_FADE,
  TRANSITION_LEFT,
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
      className="snap-start bg-star min-h-screen bg-contain py-10 relative bg-black flex justify-center items-center"
    >
      <div
        className="flex flex-col gap-16 p-5 md:px-10 lg:px-20 w-full max-w-7xl"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        <motion.p // Sử dụng thẻ <p> cho ngữ nghĩa tốt hơn
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={TRANSITION_FADE} // Sử dụng variants trực tiếp
          className="text-md md:text-lg lg:text-2xl text-center text-white leading-relaxed"
        >
          In some inexplicable way, I was born to be a{" "}
          <span className="text-blue-500">collection of broken pieces</span>: I
          have a{" "}
          <span className="text-blue-500 font-semibold">LOVE OF SPORTS</span>,
          something raw and rugged,{" "}
          <span className="text-blue-500 font-semibold">HOWEVER</span>, at the
          same time, I’m drawn to{" "}
          <span className="text-blue-500 font-semibold">
            CRAFTING POETRY AND CAPTURING MOMENTS
          </span>{" "}
          in photos - something soft and dreamlike.
        </motion.p>

        {/* --- KHỐI LƯỚI ĐÃ SỬA --- */}
        <motion.div
          initial="hidden" // Sử dụng "hidden" thay vì object để nhất quán
          animate={isInView ? "visible" : "hidden"}
          variants={STAGGER} // Áp dụng variants STAGGER cho container
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {/* Item 1 */}
          <motion.div variants={TRANSITION_LEFT} className="w-full h-64 relative">
            <Image
              src={section31}
              fill
              style={{ objectFit: "cover" }} // Dùng style object cho objectFit
              className="rounded-xl "
              alt="Activities on stage"
            />
          </motion.div>
          {/* Item 2 */}
          <motion.div variants={TRANSITION_LEFT} className="w-full h-64 relative">
            <Image
              src={section32}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              alt="Charity food stall"
            />
          </motion.div>
          {/* Item 3 */}
          <motion.div variants={TRANSITION_LEFT} className="w-full h-64 relative">
            <Image
              src={section33}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              alt="Helping with crafts"
            />
          </motion.div>
          {/* Item 4 */}
          <motion.div variants={TRANSITION_LEFT} className="w-full h-64 relative">
            <Image
              src={section35}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              alt="Teaching in a classroom"
            />
          </motion.div>
          {/* Item 5 */}
          <motion.div variants={TRANSITION_LEFT} className="w-full h-64 relative">
            <Image
              src={section34}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              alt="Discussing with students"
            />
          </motion.div>
          {/* Item 6 - ĐÃ THÊM */}
          <motion.div variants={TRANSITION_LEFT} className="w-full h-64 relative">
            <Image
              src={section36}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              alt="Lecturing in front of a blackboard"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}