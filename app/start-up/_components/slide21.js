import section10 from "@/public/img/startup/section10.svg";
import Image from "next/image";
export default function Slide21() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={section10} fill objectFit="contain" alt="section10" />
      </div>
    </section>
  );
}
