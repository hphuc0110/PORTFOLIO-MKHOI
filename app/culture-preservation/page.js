import { CultureData } from "@/data/culture";
import Image from "next/image";
import Link from "next/link";
import Banner from "./_components/banner";
import Section2 from "./_components/section2";
import { FusionData } from "@/data/fusion";
import Section3 from "./_components/section3";
import Section1 from "./_components/section1";

export default function Page() {
  return (
    <div id="main-scroll" className="snap-y snap-mandatory h-screen overflow-auto text-black">
      <Banner />
      <Section1 />
      <Section2 />
      <div>
        {CultureData.map((item, idx) => {
          return (
            <section
              key={idx}
              id={`pic-${idx}`}
              className="snap-start h-screen relative"
            >
              <div className="gap-8 h-screen  flex flex-col p-10">
                <Image src={item} fill objectFit="cover" alt="slide38" />
              </div>
            </section>
          );
        })}
      </div>

      <Link
        href="/culture-preservation/#section-1"
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
