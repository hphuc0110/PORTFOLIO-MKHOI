import Slide16Pic from "@/public/img/startup/slide16.png";
import Image from "next/image";
export default function Slide16() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide16Pic} fill objectFit="cover" alt="slide16" />
      </div>
    </section>
  );
}
