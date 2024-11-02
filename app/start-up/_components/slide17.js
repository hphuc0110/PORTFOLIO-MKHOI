import star from "@/public/icon/star.png";
import Image from "next/image";
import section61 from "@/public/img/startup/section61.svg";

export default function Slide17() {
  return (
    <section
      className="snap-start h-screen bg-space relative min-w-[1440px]"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col items-center text-center relative ">
        <div className="p-24 pt-12 flex max-w-[1226px] mt-24">
          <Image src={section61} className="rounded-2xl" alt="section61" />
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
