import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import section4 from "@/public/img/dashboard/section4.png";

export default function Section42() {
  return (
    <section
      className="snap-start snap-always h-screen bg-[url(/img/dashboard/bgsection42.png)] bg-cover bg-center relative"
      style={{ backgroundColor: "#000" }}
    >
      <div className="h-screen flex flex-col justify-center pl-8 lg:pl-48 text-white uppercase text-[30px] font-semibold tracking-wider text-center">
        <div>
          Life, in its truest form, is all about
          <br />
          erasing, rewriting, beginning
        </div>
        <div className="text-5xl text-blue-500">again.</div>
      </div>
    </section>
  );
}
