import Image from "next/image";
import section1Pic from "@/public/img/coding/section1.png";
import star from "@/public/icon/star.png";
import planet from "@/public/icon/planet.png";

export default function Section1() {
  return (
    <section
      className="snap-start h-screen"
      style={{ backgroundColor: "#212121" }}
    >
      <div className="gap-8 h-screen flex flex-col  text-center relative">
        <div className="text-4xl font-semibold mt-20 text-white flex flex-col gap-2">
          <div>Overall Architecture of System</div>
          <div>Architecture Design</div>
        </div>
        <div className="p-24 pt-12">
          <Image src={section1Pic} className="rounded-3xl" alt="section1Pic" />
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
