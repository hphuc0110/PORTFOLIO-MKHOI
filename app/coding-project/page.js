import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-auto text-black">
      <section className="snap-start bg-amber-100 h-screen">
        <Navbar />
        <div className="gap-8 h-screen flex flex-col justify-center align-middle text-center">
          <div className="text-6xl mb-10">Coding Project</div>
          <div className="text-4xl">My IT Projects</div>
          <div className="text-4xl">
            Showcasing my experience and experiment with software engineering
          </div>
        </div>
      </section>
      <section className="snap-start bg-amber-200 h-screen ">
        <div className="gap-8 h-screen flex flex-col justify-center align-middle text-center">
          <div className="text-6xl">Coding Project</div>
          <div className="text-4xl">My IT Projects</div>
          <div className="text-4xl">
            Showcasing my experience and experiment with software engineering
          </div>
        </div>
      </section>
    </div>
  );
}
