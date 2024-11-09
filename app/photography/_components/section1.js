import { PhotoData } from "@/data/photography";
import star from "@/public/icon/star.png";
import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <section className="snap-start" style={{ backgroundColor: "#212121" }}>
      <div className="gap-8 flex flex-col items-center relative p-20">
        <div className="text-3xl lg:text-6xl font-semibold text-white flex flex-col gap-2">
          <div>PHOTOGRAPHY</div>
        </div>
        <div className="flex flex-col gap-4 text-white max-w-[800px]">
          <div>
            Here, I invite you to walk through these snapshots of places,
            people, and emotions that have left a mark on my journey.
          </div>
          <div>
            From the vibrant energy of Vietnam Independence Day to other
            projects that bring color and movement to stillness, these images
            are my way of communicating what words often leave unsaid. Each
            photo speaks to a piece of me—a collection of rawness and
            refinement, fragments woven into moments that feel both real and
            surreal.
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-6 justify-center transition-all pb-12">
          {PhotoData.map((item, idx) => (
            <Link href={`/photography/#pic-${idx}`}>
              <Image
                width={280}
                src={item}
                className={`hover:scale-250 duration-150 hover:border-2 hover:border-amber-400`}
                alt={`pic-${idx}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
