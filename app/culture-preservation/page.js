import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-auto text-black">
      <section className="snap-start bg-amber-100 h-screen">
        <div className="w-screen relative">
          <Navbar />
          <div className="gap-8 flex flex-col mt-20 ml-64">
            <div className="text-6xl">Culture Preservation</div>
            <div className="text-4xl">
              Nhưng liệu cuộc sống có all about a completed, polished finish
              không?
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
