import Image from "next/image";
import section121 from "@/public/img/coding/section12-1.png";
import section122 from "@/public/img/coding/section12-2.png";
import section123 from "@/public/img/coding/section12-3.png";
import star from "@/public/icon/star.png";

export default function Section12() {
  return (
    <section className="snap-start h-screen bg-space">
      <div className="gap-3 h-screen flex flex-col  text-center relative">
        <div className="text-white flex gap-4 w-full justify-center mt-48">
          <div className="flex flex-col w-fit gap-4">
            <Image src={section121} width={300} alt="section121" />
            <div>Tracking order screen</div>
          </div>
          <div className="flex flex-col w-fit gap-4">
            <Image src={section122} width={300} alt="section122" />
            <div>promotion screen</div>
          </div>

          <div className="flex flex-col w-fit gap-4">
            <Image src={section123} width={300} alt="section123" />
            <div>feedback screen</div>
          </div>
        </div>
        <Image
          src={star}
          width={150}
          height={150}
          alt="star"
          className="absolute top-[230px] right-[90px]"
        />
      </div>
    </section>
  );
}
