import Image from "next/image";
import section1Pic from "@/public/img/coding/section1.png";
import star from "@/public/icon/star.png";
import planet from "@/public/icon/planet.png";
import Navbar from "@/components/Navbar/Navbar";
import banner from "@/public/img/photography/banner.png";

export default function Banner() {
  return (
    <section className="snap-start h-screen relative">
      <Navbar />
      <div className="text-3xl sm:text-6xl text-white tracking-widest h-full w-full flex flex-col text-center justify-center items-center">
        <div className="text-3xl sm:text-6xl font-semibold ">
          PHOTOGRAPHY <br />& FILMING
        </div>
      </div>
      <div className="h-full w-full absolute top-0 -z-10">
        <Image src={banner} fill objectFit="cover" alt="banner" />
      </div>
    </section>
  );
}
