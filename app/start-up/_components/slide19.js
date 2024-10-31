import Slide19Pic from "@/public/img/startup/slide19.png";
import Image from "next/image";
export default function Slide19() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide19Pic} fill objectFit="contain" alt="slide19" />
      </div>
    </section>
  );
}
