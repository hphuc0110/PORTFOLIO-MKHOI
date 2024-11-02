import star from "@/public/icon/star.png";
import Image from "next/image";
import section41 from "@/public/img/startup/section41.svg";

export default function Slide15() {
  return (
    <section
      className="snap-start h-screen bg-space relative min-w-[1440px]"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col items-center text-center relative">
        <div className="text-5xl font-semibold mt-20 text-white flex flex-col gap-2">
          <div>Business Idea</div>
        </div>
        <div className="p-24 pt-12 flex max-w-[1203px]">
          <Image src={section41} className="rounded-2xl" alt="section41" />
        </div>
      </div>
      <Image
        src={star}
        width={150}
        height={150}
        alt="star"
        className="absolute top-[30px] -left-0"
      />
      <Image
        src={star}
        width={150}
        height={150}
        alt="star"
        className="absolute bottom-[50px] right-[100px]"
      />
    </section>
  );
}
