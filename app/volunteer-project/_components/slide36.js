import Slide36Pic from "@/public/img/volunteer/slide36.jpg";
import Image from "next/image";
export default function Slide36() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide36Pic} fill objectFit="cover" alt="slide36" />
      </div>
    </section>
  );
}
