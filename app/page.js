import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import pic1 from "@/public/img/dashboard/1.png";
import pic2 from "@/public/img/dashboard/2.svg";
import pic3 from "@/public/img/dashboard/3.png";
import pic4 from "@/public/img/dashboard/4.svg";
import pic5 from "@/public/img/dashboard/5.svg";
import pic6 from "@/public/img/dashboard/6.svg";
import pic7 from "@/public/img/dashboard/7.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-auto text-black">
        <section
          id="section-1"
          className="snap-start h-screen"
          style={{ backgroundColor: "#26149c" }}
        >
          <div className="h-screen flex flex-col">
            <Navbar />
            <div className="h-full flex justify-center relative">
              <Image src={pic1} layout="fill" objectFit="contain" alt="pic1" />
            </div>
          </div>
        </section>
        <section className="snap-start h-screen relative">
          <div className="gap-8 h-screen flex flex-col p-10 ">
            <Image src={pic2} layout="fill" objectFit="contain" alt="pic2" />
          </div>
        </section>
        <section
          className="snap-start h-screen relative"
          style={{
            background: "rgb(255,255,255)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,22,113,1) 50%, rgba(0,22,113,1) 100%)",
          }}
        >
          <div className="gap-8 h-screen flex flex-col p-10">
            <Image src={pic3} layout="fill" objectFit="contain" alt="pic3" />
          </div>
        </section>
        <section
          className="snap-start h-screen relative"
          style={{ backgroundColor: "#001671" }}
        >
          <div className="gap-8 h-screen flex flex-col p-10">
            <Image src={pic4} layout="fill" objectFit="contain" alt="pic4" />
          </div>
        </section>
        <section className="snap-start h-screen relative">
          <div className="gap-8 h-screen flex flex-col p-10">
            <Image src={pic5} layout="fill" objectFit="contain" alt="pic5" />
          </div>
        </section>
        <section className="snap-start h-screen relative">
          <div className="gap-8 h-screen flex flex-col p-10">
            <Image src={pic6} layout="fill" objectFit="contain" alt="pic6" />
          </div>
        </section>
        <section className="snap-start h-screen relative">
          <div className="gap-8 h-screen flex flex-col p-10">
            <Image src={pic7} layout="fill" objectFit="contain" alt="pic7" />
          </div>
        </section>
      </div>
      <Link
        href="/#section-1"
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
    </>
  );
}
