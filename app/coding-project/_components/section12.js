import Image from "next/image";
import section121 from "@/public/img/coding/section12-1.png";
import section122 from "@/public/img/coding/section12-2.png";
import section123 from "@/public/img/coding/section12-3.png";
import star from "@/public/icon/star.png";

export default function Section12() {
  return (
    <section className="snap-start h-screen bg-space overflow-auto">
      <div className="gap-3 h-screen flex flex-col  text-center relative">
        <div className="text-white flex flex-wrap gap-4 h-full justify-center p-12 xl:p-12">
          <div className="flex flex-col flex-1 h-full min-w-[200px] gap-4">
            <div className="w-full h-full relative">
              <Image
                src={section121}
                fill
                objectFit="contain"
                alt="section121"
              />
            </div>
            <div>Tracking order screen</div>
          </div>
          <div className="flex flex-col flex-1 h-full min-w-[200px] gap-4">
            <div className="w-full h-full relative">
              <Image
                src={section122}
                fill
                objectFit="contain"
                alt="section122"
              />
            </div>
            <div>promotion screen</div>
          </div>

          <div className="flex flex-col flex-1 h-full min-w-[200px] gap-4">
            <div className="w-full h-full relative">
              <Image
                src={section123}
                fill
                objectFit="contain"
                alt="section123"
              />
            </div>
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
