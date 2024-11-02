import Navbar from "@/components/Navbar/Navbar";
import pic1 from "@/public/img/culture/Slide1.PNG";
import Image from "next/image";
import star from "@/public/icon/star.png";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      id="main"
      className="items-center snap-start h-screen relative"
      style={{
        backgroundColor: "#212121",
      }}
    >
      <Navbar color="dark" />
      <div className="flex flex-col mt-12 h-screen relative">
        <div className="flex flex-col items-center text-center">
          <div className="text-5xl font-semibold text-amber-500">
            CULTURAL PRESERVATION
          </div>
          <div className="mt-5 max-w-[800px] text-xl text-white">
            Our cultural heritage isn’t simply history; it’s a living story that
            evolves alongside us. To keep tradition vibrant, I seek to blend its
            richness with contemporary elements, making it meaningful and
            accessible for younger generations. Join me through these projects
            to see how this vision comes to life.
          </div>
        </div>
        <div className="text-white py-10 px-20 flex flex-col gap-10">
          <div className="flex gap-4">
            <Image width={400} src={pic1} alt="pic1" />
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-3xl text-amber-500 font-semibold">
                  The Preservation of Traditional Arts form - Tuồng
                </div>
                <div className="text-xl">
                  Every culture has its essence, and for me, Vietnamese tuồng
                  theater is a gem worth preserving. Tuồng speaks in a language
                  of the past that doesn’t easily resonate with the younger
                  generation today. In this project, I explored how to make
                  Tuồng more approachable and relatable to young people. By
                  re-imagining tuồng for today, I hope to breathe new life into
                  this art, ensuring it finds its way to the hearts of a modern
                  audience.
                </div>
              </div>
              <Link href="/culture-preservation/#section-2">
                <div className="text-xl w-fit border-2 px-3 py-2 border-amber-500 text-amber-500 hover:text-white hover:bg-amber-500 cursor-pointer">
                  Find out more
                </div>
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <Image width={400} src={pic1} alt="pic1" />
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-3xl text-amber-500 font-semibold">
                  “REINVENTING BÁNH GIÒ" - A RAW PATH TO REIMAGINING TRADITION
                </div>
                <div className="text-xl">
                  Witnessing the disconnection between young Vietnamese and
                  their rich cultural heritage, I envisioned a canvas where
                  tradition could be painted with the vibrant colors of
                  modernity. "Bánh Giò Đông Trùng Hạ Thảo" and "Bánh Giò Sốt
                  Vang" are not just culinary innovations; they are the
                  harbingers of a cultural renaissance -{" "}
                  <strong>The Fusion Version of Traditional Culinary</strong>
                </div>
              </div>
              <Link href="/culture-preservation/#section-3">
                <div className="text-xl w-fit border-2 px-3 py-2 border-amber-500 text-amber-500 hover:text-white hover:bg-amber-500 cursor-pointer">
                  Find out more about “Bánh giò Fusion"
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={star}
        width={150}
        height={150}
        alt="star"
        className="absolute top-[150px] -left-0"
      />
    </section>
  );
}
