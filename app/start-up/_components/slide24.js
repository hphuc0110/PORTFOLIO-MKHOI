import Slide24Pic from "@/public/img/startup/slide24.png";
import Image from "next/image";
export default function Slide24() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide24Pic} fill objectFit="contain" alt="slide24" />
      </div>
    </section>
  );
}
