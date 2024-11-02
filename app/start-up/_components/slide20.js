import star from "@/public/icon/star.png";
import Image from "next/image";
import section91 from "@/public/img/startup/section91.png";
import section92 from "@/public/img/startup/section92.png";

export default function Slide20() {
  return (
    <section
      className="snap-start h-screen bg-space relative min-w-[1440px]"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col items-center text-center relative">
        <div className="text-5xl font-semibold mt-10 text-white flex flex-col gap-4">
          <div>THIS PRODUCT IS BEST-SUITED FOR</div>
          <div>IT workers</div>
        </div>
        <div className="flex items-center justify-center h-full gap-12 text-white">
          <div className="flex flex-col gap-4">
            <Image src={section91} className="rounded-2xl" alt="section91" />
            <div>
              IT Interview Practice and Mock Interviews with IT Professionals
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Image src={section92} className="rounded-2xl" alt="section92" />
            <div>Customized IT English learning paths</div>
          </div>
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
