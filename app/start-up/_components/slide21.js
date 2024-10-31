import Slide21Pic from "@/public/img/startup/slide21.png";
import Image from "next/image";
export default function Slide21() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide21Pic} fill objectFit="contain" alt="slide21" />
      </div>
    </section>
  );
}
