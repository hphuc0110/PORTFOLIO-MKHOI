import Slide35Pic from "@/public/img/volunteer/slide35.png";
import Image from "next/image";
export default function Slide35() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide35Pic} fill objectFit="cover" alt="slide35" />
      </div>
    </section>
  );
}
