import Slide23Pic from "@/public/img/startup/slide23.png";
import Image from "next/image";
export default function Slide23() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide23Pic} fill objectFit="contain" alt="slide23" />
      </div>
    </section>
  );
}
