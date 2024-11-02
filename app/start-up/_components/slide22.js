import section11 from "@/public/img/startup/section11.svg";
import Image from "next/image";
export default function Slide22() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={section11} fill objectFit="contain" alt="section11" />
      </div>
    </section>
  );
}
