"use client";

export default function Section2() {
  return (
    <section className="snap-start h-screen bg-black text-white overflow-auto">
      <div className="gap-8 h-screen flex flex-col relative p-20">
        <div className="text-3xl xl:text-5xl font-semibold text-white flex flex-col gap-2">
          <div>FILMING</div>
        </div>
        <div className="flex flex-col gap-4 text-white max-w-[800px]">
          <div>
            My promotional video for one of the most prestigious tea brands in
            Vietnam - Phuc Long tea
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-2xl text-amber-300">PHÚC LONG</div>
            <div className="text-4xl xl:text-6xl font-semibold">
              THE MASTERY
              <br />
              CREATING
              <br />
              ORIGINALI-TEA
            </div>
          </div>
          {/* <video
            width="800"
            className="rounded-lg shadow-xl"
            autoPlay
            muted
            loop
          >
            <source src="https://vimeo.com/1025652923" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <div>
            <iframe
              src="https://player.vimeo.com/video/1025652923?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;controls=0&amp;muted=1&amp;loop=1"
              frameBorder="0"
              width="640"
              height="360"
              allow="autoplay; picture-in-picture; clipboard-write"
              title="slide58"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
