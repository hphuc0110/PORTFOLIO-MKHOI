import Slide40Pic from "@/public/img/volunteer/slide40.jpg";
import Image from "next/image";
export default function Slide40() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide40Pic} fill objectFit="cover" alt="slide40" />
      </div>
    </section>
  );
}
