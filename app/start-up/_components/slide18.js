import star from "@/public/icon/star.png";
import Image from "next/image";
import section7 from "@/public/img/startup/section7.png";

export default function Slide18() {
  return (
    <section
      className="snap-start h-screen bg-space relative min-w-[1440px]"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col items-center text-center relative">
        <div className="text-5xl font-semibold mt-10 text-white flex flex-col gap-4">
          <div>METHOD OF TEACHING:</div>
          <div>“LEARN HISTORY, GEOGRAPHY, SOCIAL</div>
          <div>KNOWLEDGE" IN ENGLISH</div>
        </div>
        <div className="p-12 pt-0 flex max-w-[1233px]">
          <Image src={section7} className="rounded-2xl" alt="section7" />
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
