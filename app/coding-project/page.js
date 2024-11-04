import Navbar from "@/components/Navbar/Navbar";
import Section1 from "./_components/section1";
import bannerPic from "@/public/img/coding/banner.png";
import Image from "next/image";
import Section2 from "./_components/section2";
import Section3 from "./_components/section3";
import Section4 from "./_components/section4";
import Section5 from "./_components/section5";
import Section6 from "./_components/section6";
import Section7 from "./_components/section7";
import Section8 from "./_components/section8";
import Section9 from "./_components/section9";
import Section10 from "./_components/section10";
import Section11 from "./_components/section11";
import Section12 from "./_components/section12";
import Link from "next/link";

export default function Page() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-auto text-black">
      <section id="section-1" className="snap-start h-screen relative">
        <Navbar />
        <div className="text-3xl sm:text-6xl text-white font-semibold tracking-widest h-full w-full flex justify-center items-center">
          LUKA MOVE
        </div>
        <div className="h-full w-full absolute top-0 -z-10">
          <Image src={bannerPic} fill objectFit="cover" alt="banner" />
        </div>
      </section>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Link
        href="/coding-project/#section-1"
        className="fixed bottom-8 right-8 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 focus:outline-none transition-opacity duration-300 select-none"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
  );
}
