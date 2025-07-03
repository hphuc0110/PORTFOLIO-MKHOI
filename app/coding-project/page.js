import Navbar from "@/components/Navbar/Navbar";
import slide1 from "@/public/img/coding/slide1.png";
import Image from "next/image";
import Slide2 from "./_components/slide2";
import Slide3 from "./_components/slide3";
import Slide4 from "./_components/slide4";
import Slide5 from "./_components/slide5";
import Slide6 from "./_components/slide6";
import Slide7 from "./_components/slide7";
import Slide8 from "./_components/slide8";
import Slide9 from "./_components/slide9";
import Slide10 from "./_components/slide10";
import Slide11 from "./_components/slide11";
import Slide12 from "./_components/slide12";
import Slide13 from "./_components/slide13";
import Slide14 from "./_components/slide14";
import Slide15 from "./_components/slide15";
import Slide16 from "./_components/slide16";
import Slide17 from "./_components/slide17";
import Slide18 from "./_components/slide18";
import Slide19 from "./_components/slide19";
import Slide20 from "./_components/slide20";
import Slide21 from "./_components/slide21";
import Slide22 from "./_components/slide22";
import Slide23 from "./_components/slide23";
import Slide24 from "./_components/slide24";

import Link from "next/link";

export default function Page() {
  return (
    <div id="main-scroll" className="snap-y snap-mandatory h-screen overflow-auto text-black">
      <section id="section-1" className="snap-start h-screen relative">
        <Navbar />
        <div className="text-3xl sm:text-6xl text-white font-semibold tracking-widest h-full w-full flex justify-center items-center">
        </div>
        <div className="h-full w-full absolute top-0 -z-10">
          <Image src={slide1} fill objectFit="cover" alt="banner" />
        </div>
      </section>
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
      <Slide8 />
      <Slide9 />
      <Slide10 />
      <Slide11 />
      <Slide12 />
      <Slide13 />
      <Slide14 />
      <Slide15 />
      <Slide16 />
      <Slide17 />
      <Slide18 />
      <Slide19 />
      <Slide20 />
      <Slide21 />
      <Slide22 />
      <Slide23 />
      <Slide24 />
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