import Slide38Pic from "@/public/img/volunteer/slide38.jpg";
import Image from "next/image";
export default function Slide38() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide38Pic} fill objectFit="cover" alt="slide38" />
      </div>
    </section>
  );
}
