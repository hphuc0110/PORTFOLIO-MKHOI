import Slide17Pic from "@/public/img/startup/slide17.png";
import Image from "next/image";
export default function Slide17() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide17Pic} fill objectFit="contain" alt="slide17" />
      </div>
    </section>
  );
}
