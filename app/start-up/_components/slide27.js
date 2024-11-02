import section15 from "@/public/img/startup/section15.svg";
import Image from "next/image";
export default function Slide27() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={section15} fill objectFit="contain" alt="section15" />
      </div>
    </section>
  );
}
