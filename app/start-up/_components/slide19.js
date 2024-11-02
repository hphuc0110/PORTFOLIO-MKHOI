import star from "@/public/icon/star.png";
import Image from "next/image";
import section8 from "@/public/img/startup/section8.svg";

export default function Slide19() {
  return (
    <section
      className="snap-start h-screen bg-space relative min-w-[1440px]"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col items-center text-center relative">
        <div className="text-5xl font-semibold mt-10 text-white flex flex-col gap-4">
          <div>STUDY ASSISTANT - PERSONAL STUDY HELPER</div>
          <div>TO KEEP LEARNERS MOTIVATED EVERY DAY</div>
        </div>
        <div className="p-12 pt-0 flex max-w-[1102px]">
          <Image src={section8} className="rounded-2xl" alt="section8" />
        </div>
      </div>
      <Image
        src={star}
        width={150}
        height={150}
        alt="star"
        className="absolute top-[30px] -left-0"
      />
    </section>
  );
}
