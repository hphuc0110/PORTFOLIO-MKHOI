import Slide39Pic from "@/public/img/volunteer/slide39.png";
import Image from "next/image";
export default function Slide39() {
  return (
    <section className="snap-start h-screen relative">
      <div className="gap-8 h-screen flex flex-col p-10">
        <Image src={Slide39Pic} fill objectFit="cover" alt="slide39" />
      </div>
    </section>
  );
}
