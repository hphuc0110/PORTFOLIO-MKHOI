import Slide42Pic from "@/public/img/volunteer/9.png";
import Image from "next/image";

export default function Slide42() {
  return (
    <section
      className="snap-start h-screen relative"
      style={{
        background: "linear-gradient(131deg, rgba(16,29,106,1) 0%, rgba(40,67,137,1) 100%)",
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={Slide42Pic}
          alt="slide42"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
