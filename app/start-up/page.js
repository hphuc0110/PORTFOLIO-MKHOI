'use cli'
import Image from "next/image";
import Link from "next/link";

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
import Slide25 from "./_components/slide25";
import Slide29 from "./_components/slide29";
import Slide28 from "./_components/slide28";
import Slide27 from "./_components/slide27";
import Slide30 from "./_components/slide30";
import Slide31 from "./_components/slide31";
import Slide32 from "./_components/slide32";

export default function Page() {
  return (
    <div id="main-scroll" className="snap-y snap-mandatory h-screen overflow-auto text-black">
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
      <Slide25 />
      <Slide27 />
      {/* <Slide28 />
      <Slide29 />
      <Slide30 />
      <Slide31 />
      <Slide32 /> */}

      <Link
        href="/start-up/#main"
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
