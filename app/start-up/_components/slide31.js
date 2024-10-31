import Slide31Pic from "@/public/img/startup/slide31.png";
import Image from "next/image";
export default function Slide31() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide31Pic} fill objectFit="contain" alt="slide31" />
      </div>
    </section>
  );
}
