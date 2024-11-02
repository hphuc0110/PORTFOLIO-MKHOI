import Slide41Pic from "@/public/img/volunteer/slide41.png";
import Image from "next/image";
export default function Slide41() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide41Pic} fill objectFit="cover" alt="slide41" />
      </div>
    </section>
  );
}
