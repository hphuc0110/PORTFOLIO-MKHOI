import Image from "next/image";
import section7 from "@/public/img/coding/section7.png";

export default function Section7() {
  return (
    <section
      className="snap-start h-screen"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col justify-center text-center relative">
        <div className="text-white p-24 flex flex-col w-full text-start gap-8">
          <div className="text-4xl font-semibold">Cancel order</div>
          <Image
            src={section7}
            height={700}
            className="rounded-xl"
            alt="section7"
          />
        </div>
      </div>
    </section>
  );
}
