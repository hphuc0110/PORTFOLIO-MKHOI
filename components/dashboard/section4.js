import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import section4 from "@/public/img/dashboard/section4.png";

export default function Section4() {
  return (
    <section
      className="snap-start snap-always h-screen relative"
      style={{ backgroundColor: "#000" }}
    >
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image
          src={section4}
          layout="fill"
          objectFit="contain"
          alt="section4"
        />
      </div>
    </section>
  );
}
