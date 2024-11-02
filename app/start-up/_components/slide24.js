import section13 from "@/public/img/startup/section13.svg";
import Image from "next/image";
export default function Slide24() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={section13} fill objectFit="contain" alt="section13" />
      </div>
    </section>
  );
}
