import Image from "next/image";
import section111 from "@/public/img/coding/section11-1.jpg";
import section112 from "@/public/img/coding/section11-2.png";
import section113 from "@/public/img/coding/section11-3.png";
import section114 from "@/public/img/coding/section11-4.png";
import star from "@/public/icon/star.png";

export default function Section11() {
  return (
    <section className="snap-start h-screen bg-space">
      <div className="gap-3 h-screen flex flex-col  text-center relative">
        <div className="text-4xl font-semibold mt-20 text-white flex flex-col gap-2">
          <div>Take a snapshot of the</div>
          <div>App's UI Design</div>
        </div>
        <div className="text-white flex gap-4 w-full justify-center mt-10">
          <div className="flex flex-col w-fit gap-4">
            <Image src={section111} width={300} alt="section111" />
            <div>log in screen</div>
          </div>
          <div className="flex flex-col w-fit gap-4">
            <Image src={section112} width={300} alt="section112" />
            <div>option</div>
          </div>

          <div className="flex flex-col w-fit gap-4">
            <Image src={section113} width={300} alt="section113" />
            <div>tracking order</div>
          </div>
          <div className="flex flex-col w-fit gap-4">
            <Image src={section114} width={300} alt="section114" />
            <div>tracking order (guest screen)</div>
          </div>
        </div>
        <Image
          src={star}
          width={150}
          height={150}
          alt="star"
          className="absolute top-[30px] -left-0"
        />
      </div>
    </section>
  );
}
