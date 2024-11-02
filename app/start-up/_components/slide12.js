import Navbar from "@/components/Navbar/Navbar";

import banner from "@/public/img/startup/banner.png";
import Image from "next/image";
import star from "@/public/icon/star.png";

export default function Slide12() {
  return (
    <section
      id="main"
      className="items-center snap-start bg-amber-100 h-screen relative"
      style={{
        backgroundColor: "#212121",
      }}
    >
      <Navbar color="dark" />
      <div className="flex h-screen relative">
        <Image src={banner} alt="banner" />
        <div className="absolute top-[300px] right-[100px] text-center">
          <div className="text-5xl font-semibold text-amber-500">GrabStudy</div>
          <div className="mt-5 text-4xl text-white">
            A Life-Changing Solution for English
            <br /> learners in Vietnam
          </div>
        </div>
      </div>
      <Image
        src={star}
        width={150}
        height={150}
        alt="star"
        className="absolute top-[150px] -left-0"
      />
    </section>
  );
}
