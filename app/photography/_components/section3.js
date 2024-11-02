"use client";
import video60 from "@/public/video/slide60.mp4";
export default function Section3() {
  return (
    <section className="snap-start h-screen min-w-[1440px] bg-black text-white">
      <div className="h-screen relative">
        <div className="text-6xl font-semibold text-white flex flex-col gap-2 absolute top-[50px] left-[20px]">
          <div>THE PROMOTIONAL VIDEO</div>
        </div>
        {/* <video
          className="w-screen h-screen rounded-xl shadow-xl"
          autoPlay
          muted
          loop
        >
          <source src={video60} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div>
          <iframe
            src="https://player.vimeo.com/video/1025653022?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="h-screen w-screen"
            title="slide60"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
