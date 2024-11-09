import pic1 from "@/public/img/culture/Slide1.PNG";
import pic2 from "@/public/img/culture/banhgio.PNG";
import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <section
      id="section-1"
      className="items-center snap-start min-h-screen bg-star relative bg-black"
    >
      <div className="text-white py-10 px-6 md:px-12 lg:px-20 h-full flex flex-col justify-center items-center gap-20">
        <div className="flex gap-10 max-sm:flex-col w-full h-full">
          <div className="relative max-sm:h-[328px] w-full">
            <Image
              fill
              objectFit="cover"
              className="rounded-3xl"
              src={pic1}
              alt="pic1"
            />
          </div>
          <div className="flex flex-col justify-between max-w-[600px]">
            <div>
              <div className="text-xl xl:text-3xl font-semibold bg-gradient-to-r from-blue-700 to-blue-400 inline-block text-transparent bg-clip-text">
                The Preservation of Traditional Arts form - Tuồng
              </div>
              <div className="xl:text-xl my-4">
                Every culture has its essence, and for me, Vietnamese tuồng
                theater is a gem worth preserving. Tuồng speaks in a language of
                the past that doesn’t easily resonate with the younger
                generation today. In this project, I explored how to make Tuồng
                more approachable and relatable to young people. By re-imagining
                tuồng for today, I hope to breathe new life into this art,
                ensuring it finds its way to the hearts of a modern audience.
              </div>
            </div>
            <Link href="/culture-preservation/#section-2">
              <div className="text-xl w-fit border-2 px-3 py-2 border-white text-white rounded-lg cursor-pointer">
                Find out more
              </div>
            </Link>
          </div>
        </div>
        <div className="flex max-sm:flex-col-reverse gap-10 w-full">
          <div className="flex flex-col justify-between max-w-[600px]">
            <div>
              <div className="text-xl xl:text-3xl bg-gradient-to-r from-blue-700 to-blue-400 inline-block text-transparent bg-clip-text font-semibold">
                “REINVENTING BÁNH GIÒ" - A RAW PATH TO REIMAGINING TRADITION
              </div>
              <div className="xl:text-xl my-4">
                Witnessing the disconnection between young Vietnamese and their
                rich cultural heritage, I envisioned a canvas where tradition
                could be painted with the vibrant colors of modernity. "Bánh Giò
                Đông Trùng Hạ Thảo" and "Bánh Giò Sốt Vang" are not just
                culinary innovations; they are the harbingers of a cultural
                renaissance -{" "}
                <strong>The Fusion Version of Traditional Culinary</strong>
              </div>
            </div>
            <Link href="/culture-preservation/#section-3">
              <div className="text-xl w-fit border-2 px-3 py-2 border-white text-white rounded-lg cursor-pointer">
                Find out more
              </div>
            </Link>
          </div>
          <div className="relative max-sm:h-[328px] w-full">
            <Image
              fill
              objectFit="cover"
              className="rounded-3xl"
              src={pic2}
              alt="pic2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
