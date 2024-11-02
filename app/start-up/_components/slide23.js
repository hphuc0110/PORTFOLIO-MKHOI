import section12 from "@/public/img/startup/section12.svg";
import Image from "next/image";
export default function Slide23() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={section12} fill objectFit="contain" alt="section12" />
      </div>
    </section>
  );
}
