import Image from "next/image";
import section8 from "@/public/img/coding/section8.png";

export default function Section8() {
  return (
    <section
      className="snap-start h-screen"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col justify-center text-center relative">
        <div className="text-white p-24 flex flex-col h-full text-start gap-8">
          <div className="text-2xl lg:text-4xl font-semibold">
            View order state
          </div>
          <div className="w-full h-full relative">
            <Image
              src={section8}
              fill
              objectFit="contain"
              className="rounded-xl"
              alt="section8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
