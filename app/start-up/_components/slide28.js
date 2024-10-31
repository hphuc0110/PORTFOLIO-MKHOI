import Slide28Pic from "@/public/img/startup/slide28.png";
import Image from "next/image";
export default function Slide28() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide28Pic} fill objectFit="cover" alt="slide28" />
      </div>
    </section>
  );
}
