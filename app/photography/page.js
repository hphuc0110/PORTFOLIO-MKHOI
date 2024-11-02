import Navbar from "@/components/Navbar/Navbar";
import Banner from "./_components/banner";
import Section1 from "./_components/section1";
import Section2 from "./_components/section2";
import Section3 from "./_components/section3";
import Section4 from "./_components/section4";

export default function Page() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-auto text-black">
      <section id="section-1" className="snap-start bg-amber-100 h-screen">
        <div className="relative">
          <Navbar />
          <Banner />
        </div>
      </section>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
