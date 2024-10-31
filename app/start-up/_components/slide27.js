import Slide27Pic from "@/public/img/startup/slide27.png";
import Image from "next/image";
export default function Slide27() {
  return (
    <section className="snap-start bg-red-600 h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide27Pic} fill objectFit="contain" alt="slide27" />
      </div>
    </section>
  );
}
