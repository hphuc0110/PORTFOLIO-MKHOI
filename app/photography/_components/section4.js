"use client";
import video60 from "@/public/video/slide60.mp4";
export default function Section4() {
  return (
    <section className="snap-start h-screen min-w-[1440px] bg-black text-white">
      <div className="h-screen relative">
        <div className="absolute top-[100px] pt-[100px] left-[20px] z-30 px-32 backdrop-blur-lg h-screen w-[98%]">
          <div className="text-2xl text-white flex flex-col gap-4 max-w-[1000px]">
            <div className="text-5xl font-semibold">
              The mastery of creating originali-tea
            </div>
            <div>
              Originality means being difference, and creating difference is a
              rough journey.
              <br />
              Are we strong enough to walk this path?
            </div>
            <div>
              Being Original means willing to try.
              <br />
              Every choice, every story <br />
              every challenge, every success
              <br />
              On a journey to originality, passion is the only fuel.
              <br />
            </div>
            <div>
              Phúc Long's passion from the start has always been to create
              original flavors. We handpick, dry, fry, and grind every tea leaf
              with care - a technique that brings out the most flavor, just as
              strong as our passion.
            </div>
            <div>
              To thrive as tea connoisseur, we constantly explore and unveil new
              recipes.
              <br />
              We open up the world of strong taste, one sip at a time. With
              every creation, we’re closer to mastery.
            </div>
            <div>
              Let the strong flavour inspire you to create your own world, a
              world of originality.
            </div>
          </div>
        </div>

        <div>
          <iframe
            src="https://player.vimeo.com/video/1025653022?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;controls=0&amp;muted=1&amp;loop=1"
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
