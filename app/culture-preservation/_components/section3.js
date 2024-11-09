import { FusionData } from "@/data/fusion";
import star from "@/public/icon/star.png";
import Image from "next/image";
import Link from "next/link";

export default function Section3() {
  return (
    <section
      id="section-3"
      className="items-center snap-start min-h-screen  bg-black bg-star relative transition-all"
    >
      <div className="flex flex-col p-20 relative">
        <div className="flex flex-col text-center">
          <div className="text-xl md:text-3xl xl:text-5xl font-semibold bg-gradient-to-r from-blue-700 to-blue-400 inline-block text-transparent bg-clip-text">
            MY RAW PATH TO REIMAGINING TRADITION
          </div>
          <div className="text-md md:text-xl xl:text-2xl text-white">
            Crafting the Future with Threads of the Past
          </div>
          <div className="mt-5 xl:text-xl text-white">
            Bánh giò—a traditional Vietnamese delicacy—is not merely food but a
            nostalgic symbol, deeply woven into the culinary and cultural
            heritage of Northern Vietnam. Yet, the familiarity of Bánh giò is
            slowly fading, especially among younger Vietnamese who may no longer
            recognize or appreciate its cultural significance.
          </div>
          <div className="mt-5 xl:text-xl text-white">
            In response, I am on a mission to reintroduce Bánh giò to a new
            generation. This transformation retains the essence and traditional
            flavors of Bánh giò while incorporating unique, modern ingredients
            to create “Bánh giò Fusion.” By blending traditional elements with
            unexpected ingredients, we create a version that invites younger
            generations to rediscover and cherish this cherished dish in a way
            that resonates with their modern palates and lifestyle.
          </div>
        </div>
        <div className="flex flex-wrap gap-6 py-12 justify-center transition-all duration-75">
          {FusionData.map((item, idx) => {
            return (
              <Link href={`/culture-preservation/#fusion-${idx}`}>
                <Image
                  width={230}
                  src={item}
                  className="hover:scale-150 duration-150 hover:border-2 hover:border-amber-400"
                  alt={`fusion-${idx}`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
