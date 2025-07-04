import Slide39Pic from "@/public/img/volunteer/6.webp";
import Image from "next/image";
export default function Slide39() {
  return (
    <section
      className="snap-start h-screen relative "
      style={{
        background: "rgb(16,29,106)",
        background:
          "linear-gradient(131deg, rgba(16,29,106,1) 0%, rgba(40,67,137,1) 100%)",
      }}
    >
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide39Pic} fill objectFit="contain" alt="slide39" />
      </div>
    </section>
  );
}
