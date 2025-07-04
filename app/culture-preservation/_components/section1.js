import pic1 from "@/public/img/culture/Slide1.PNG";
import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <section
      id="section-1"
      className="snap-start min-h-screen bg-black bg-star relative flex items-center justify-center"
    >
      <div className="text-white py-10 px-6 md:px-12 lg:px-20 flex flex-col gap-16 max-w-screen-xl w-full">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="relative w-full h-80 lg:h-[480px] lg:w-1/2">
            <Image
              src={pic1}
              alt="Tuồng traditional art"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h2 className="text-2xl xl:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
              The Preservation of Traditional Arts Form - Tuồng
            </h2>
            <p className="xl:text-lg leading-relaxed">
              Every culture has its essence, and for me, Vietnamese tuồng
              theater is a gem worth preserving. Tuồng speaks in a language of
              the past that doesn’t easily resonate with the younger generation
              today. In this project, I explored how to make Tuồng more
              approachable and relatable to young people. By re-imagining tuồng
              for today, I hope to breathe new life into this art, ensuring it
              finds its way to the hearts of a modern audience.
            </p>
            <Link href="/culture-preservation/#section-2">
              <button className="text-lg px-5 py-2 border-2 border-white text-white rounded-xl hover:bg-white hover:text-black transition duration-300 w-fit">
                Find out more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
