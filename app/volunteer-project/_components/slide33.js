import Navbar from "@/components/Navbar/Navbar";
import banner from "@/public/img/volunteer/banner.png";
import Image from "next/image";

export default function Slide33() {
  return (
    <section id="main" className="items-center snap-start bg-cover h-screen">
      <Navbar />
      <div className="text-3xl sm:text-6xl text-white tracking-widest h-full w-full flex flex-col text-center justify-center items-center">
        <div className="text-3xl sm:text-6xl font-semibold uppercase">
          Volunteer <br />& Projects
        </div>
      </div>
      <div className="h-full w-full absolute top-0 -z-10">
        <Image src={banner} fill objectFit="cover" alt="banner" />
      </div>
    </section>
  );
}
