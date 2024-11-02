import section14 from "@/public/img/startup/section14.svg";
import Image from "next/image";
export default function Slide25() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={section14} fill objectFit="contain" alt="section14" />
      </div>
    </section>
  );
}
