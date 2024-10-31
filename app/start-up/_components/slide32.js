import Slide32Pic from "@/public/img/startup/slide32.png";
import Image from "next/image";
export default function Slide32() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide32Pic} fill objectFit="contain" alt="slide32" />
      </div>
    </section>
  );
}
