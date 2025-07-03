import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import pic1 from "@/public/img/dashboard/back1.png";

export default function Section1() {
  return (
    <section
      id="section-1"
      className={`snap-start snap-always h-screen bg-[url(/img/dashboard/back1.png)] bg-cover `}
    >
      <div className="h-screen flex flex-col transition-all">
        <Navbar />
        <div className="h-full flex max-md:flex-col items-center relative overflow-hidden">
          <div className="flex flex-col justify-between h-full text-white md:pl-20 max-md:text-center md:py-20">
            <div></div>
          </div>
          <div className="md:max-w-[836px] w-full h-full relative md:absolute md:-right-[250px] lg:right-20">
          </div>
        </div>
      </div>
    </section>
  );
}
