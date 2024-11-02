import Image from "next/image";
import star from "@/public/icon/star.png";
import section6 from "@/public/img/coding/section6.png";

export default function Section6() {
  return (
    <section
      className="snap-start h-screen bg-space"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col text-center relative">
        <div className="text-4xl font-semibold mt-20 text-white flex flex-col gap-2">
          <div>System Design</div>
          <div className="text-xl font-medium">
            As part of the Detailed System Design, my responsibility was to
            create
            <br />
            sequence diagrams for our partners, especially in the order tracking
            phase.
          </div>
        </div>
        <div className="text-white p-24 pt-12 flex flex-col w-full text-start gap-8">
          <div className="text-4xl font-semibold">View orders</div>
          <Image src={section6} className="rounded-xl" alt="section6" />
        </div>
      </div>
    </section>
  );
}
