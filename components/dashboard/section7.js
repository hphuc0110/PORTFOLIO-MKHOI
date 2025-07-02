"use client";
import star from "@/public/icon/star.png";
import pic4 from "@/public/img/dashboard/pic4.webp"; // Ảnh sẽ được thêm vào
import Image from "next/image";
import { TRANSITION_LEFT } from "@/constant/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
      className="snap-start snap-always w-full min-h-screen flex items-center justify-center transition-all relative bg-[url(/img/dashboard/bgsection7.png)] bg-cover bg-center"
    >
      {/* Container chính sử dụng Flexbox */}
      <div className="w-full h-full flex flex-col xl:flex-row items-center justify-center gap-12 text-white z-10 px-6 sm:px-12 md:px-24 py-20">
        
        {/* === CỘT VĂN BẢN (BÊN TRÁI) === */}
        <div className="flex flex-col text-xl gap-6 max-w-[700px] w-full h-fit rounded-3xl p-8 sm:p-10 backdrop-blur-md border-slate-700 border">
          <div className="flex justify-between items-start">
            <div className="text-blue-500 text-2xl font-semibold">
              MINH KHÔI
            </div>
            <Image src={quote} alt="quote" className="w-10 h-10" />
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
            most captivating stories are those that remain unfinished.
          </div>
        </div>
        <div className="w-full max-w-[800px] h-[650px] relative rounded-3xl overflow-hidden">
            <Image 
                src={pic4}
                alt="Portrait of Minh Khôi"
                fill
                style={{ objectFit: 'cover' }}
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