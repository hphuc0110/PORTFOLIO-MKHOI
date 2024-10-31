import Slide22Pic from "@/public/img/startup/slide22.png";
import Image from "next/image";
export default function Slide22() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide22Pic} fill objectFit="cover" alt="slide22" />
      </div>
    </section>
  );
}
