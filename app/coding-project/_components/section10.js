import Image from "next/image";
import section10 from "@/public/img/coding/section10.png";

export default function Section10() {
  return (
    <section
      className="snap-start h-screen"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col justify-center text-center relative">
        <div className="text-white p-24 flex flex-col w-full h-full text-start gap-8">
          <div className="text-2xl lg:text-4xl font-semibold">
            View order promotion
          </div>
          <div className="w-full h-full relative">
            <Image
              src={section10}
              fill
              objectFit="contain"
              className="rounded-xl"
              alt="section10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
