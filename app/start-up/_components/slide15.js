import Image from "next/image";
import slide15pic from "@/public/img/slide15.png";

export default function Slide15() {
  return (
    <section className="snap-start h-screen">
      <div className="gap-8 h-screen flex flex-col p-10">
        <div className="text-5xl">3. Business Idea</div>
        <div className="h-full flex justify-center relative">
          <Image
            src={slide15pic}
            layout="fill"
            objectFit="contain"
            alt="slide15"
          />
        </div>
      </div>
    </section>
  );
}
