import Slide34Pic from "@/public/img/slide34.jpg";
import Image from "next/image";
export default function Slide34() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide34Pic} fill objectFit="contain" alt="slide34" />
      </div>
    </section>
  );
}
