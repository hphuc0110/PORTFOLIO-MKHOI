import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import pic1 from "@/public/img/dashboard/1.png";

export default function Section1() {
  return (
    <section
      id="section-1"
      className="snap-start snap-always h-screen"
      style={{ backgroundColor: "#26149c" }}
    >
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="h-full flex justify-center relative">
          <Image src={pic1} layout="fill" objectFit="contain" alt="pic1" />
        </div>
      </div>
    </section>
  );
}
