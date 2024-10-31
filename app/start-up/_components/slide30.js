import Slide30Pic from "@/public/img/startup/slide30.png";
import Image from "next/image";
export default function Slide30() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide30Pic} fill objectFit="cover" alt="slide30" />
      </div>
    </section>
  );
}
