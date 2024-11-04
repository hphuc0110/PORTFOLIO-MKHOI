import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import banner from "@/public/img/culture/banner.png";
export default function Banner() {
  return (
    <section id="main" className="items-center snap-start h-screen relative">
      <Navbar />

      <div className="text-white tracking-widest h-full w-full flex flex-col text-center justify-center items-center p-6 lg:p-24 xl:px-56 gap-4">
        <div className="text-3xl sm:text-6xl font-semibold ">
          Culture Preservation
        </div>
        <div className="text-center">
          Our cultural heritage isn’t simply history; it’s a living story that
          evolves alongside us. To keep tradition vibrant, I seek to blend its
          richness with contemporary elements, making it meaningful and
          accessible for younger generations. Join me through these projects to
          see how this vision comes to life.
        </div>
      </div>
      <div className="h-full w-full absolute top-0 -z-10">
        <Image src={banner} fill objectFit="cover" alt="banner" />
      </div>
    </section>
  );
}
