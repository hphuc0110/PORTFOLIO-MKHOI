import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import section4 from "@/public/img/dashboard/section4.png";

export default function Section4() {
  return (
    <section
      className="snap-start snap-always h-screen bg-[url(/img/dashboard/bgsection4.png)] bg-cover bg-center relative"
      style={{ backgroundColor: "#000" }}
    >
      <div className="gap-4 h-screen flex flex-col justify-center pl-8 lg:pl-48 text-white uppercase text-[30px] font-semibold tracking-wider max-md:text-center">
        <div className="text-5xl text-slate-500">But the truth is,</div>
        <div>
          life isn’t a straight path
          <br />
          we can walk from start to finish.
        </div>
      </div>
    </section>
  );
}
