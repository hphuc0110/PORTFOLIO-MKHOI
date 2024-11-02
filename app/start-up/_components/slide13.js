import Image from "next/image";
import section21 from "@/public/img/startup/section21.svg";
import section22 from "@/public/img/startup/section22.svg";
import section23 from "@/public/img/startup/section23.svg";
import section24 from "@/public/img/startup/section24.svg";
import section25 from "@/public/img/startup/section25.svg";
import star from "@/public/icon/star.png";
import planet from "@/public/icon/planet.png";

export default function Slide13() {
  return (
    <section
      className="snap-start h-screen min-w-[1440px]"
      style={{ backgroundColor: "#212121" }}
    >
      <div className="gap-8 h-screen flex flex-col  text-center relative">
        <div className="text-lg mt-20 text-white flex flex-col font-semibold">
          <div className="text-4xl ">Our ideation</div>
          <div>There is a big demand for English when:</div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-white" />
            <div>
              70% of Jobs in Vietnam requires at least 1 round of interview
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-white" />
            <div>
              Almost companies require their employees to fluently use English
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-white" />
            <div>
              English language centers are widespread but do not deliver quick
              results.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 px-24">
          <div className="max-w-[350px] relative">
            <Image src={section21} className="rounded-3xl " alt="section21" />
          </div>
          <div className="max-w-[350px] relative">
            <Image src={section22} className="rounded-3xl " alt="section22" />
          </div>
          <div className="max-w-[350px] relative">
            <Image src={section23} className="rounded-3xl " alt="section23" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 px-24">
          <div className="max-w-[350px] relative">
            <Image src={section24} className="rounded-3xl " alt="section24" />
          </div>
          <div className="max-w-[350px] relative">
            <Image src={section25} className="rounded-3xl " alt="section25" />
          </div>
        </div>
        <Image
          src={star}
          width={150}
          height={150}
          alt="star"
          className="absolute bottom-[150px] -right-0"
        />
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
          className="absolute bottom-[200px] -left-0"
        />
        <Image
          src={planet}
          width={1000}
          height={1000}
          alt="star"
          className="absolute top-0 -right-0"
        />
      </div>
    </section>
  );
}
