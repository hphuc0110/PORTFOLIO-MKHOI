import Navbar from "@/components/Navbar/Navbar";

export default function Slide33() {
  return (
    <section
      id="main"
      className="items-center snap-start bg-amber-100 h-screen"
    >
      <Navbar />
      <div className="flex justify-center h-screen">
        <div className="max-w-[1200px] flex flex-col justify-center align-middle text-center gap-8">
          <div className="text-6xl mb-10">Voluntary Projects</div>
          <div className="text-4xl">with one mission to </div>
          <div className="text-4xl">EMBRACE THE YOUTH'S INNER DIFFERENCE</div>
        </div>
      </div>
    </section>
  );
}
