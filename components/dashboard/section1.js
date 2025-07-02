import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import pic1 from "@/public/img/dashboard/section1.png";

export default function Section1() {
  return (
    <section
      id="section-1"
      className={`snap-start snap-always h-screen bg-[url(/img/dashboard/back.jpeg)] bg-cover `}
    >
      <div className="h-screen flex flex-col transition-all">
        <Navbar />
        <div className="h-full flex max-md:flex-col items-center relative overflow-hidden">
          <div className="flex flex-col justify-between h-full text-white md:pl-20 max-md:text-center md:py-20">
            <div></div>
            <div className="text-3xl sm:text-5xl font-semibold  bg-gradient-to-r from-blue-700 to-blue-400 inline-block text-transparent bg-clip-text">
              My life is full of drafts
              <br /> But is life truly all
              <br /> about COMPLETED
              <br />
              FINISHED?
            </div>
            <div className="text-xl">
              Is there any beauty in being unfinished?
            </div>
          </div>
          <div className="md:max-w-[836px] w-full h-full relative md:absolute md:-right-[250px] lg:right-20">
            <Image src={pic1} layout="fill" objectFit="contain" alt="pic1" />\
          </div>
        </div>
      </div>
    </section>
  );
}
