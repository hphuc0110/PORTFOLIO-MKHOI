"use client";
export default function Section3() {
  return (
    <section className="snap-start h-screen min-w-[1440px] bg-black text-white">
      <div className="h-screen relative">
        <div className="text-6xl font-semibold text-white flex flex-col gap-2 absolute top-[50px] left-[20px]">
          <div>THE PROMOTIONAL VIDEO</div>
        </div>
        <video
          className="w-screen h-screen rounded-xl shadow-xl"
          autoPlay
          muted
          loop
        >
          <source src="/video/slide60.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
