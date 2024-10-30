import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-auto text-black">
        <section id="section-1" className="snap-start bg-amber-100 h-screen">
          <div className="relative">
            <Navbar />
            <div className="gap-8 flex flex-col mx-20 my-64">
              <div className="text-6xl">My life is full of drafts </div>
              <div className="text-4xl">
                Nhưng liệu cuộc sống có all about a completed, polished finish
                không?
              </div>
            </div>
          </div>
        </section>
        <section className="snap-start bg-amber-200 h-screen">
          <div className="flex px-52 py-24 h-full gap-8">
            <div className="flex flex-col flex-1 min-w-[400px] h-full text-3xl gap-5 justify-center">
              <div>
                In some inexplicable way, I was born to be a collection of
                broken pieces:
              </div>
              <div>
                I have a love for sports, something raw and rugged, yet at the
                same time, I’m drawn to crafting poetry and capturing moments in
                photos—something soft and dreamlike.
              </div>
              <div>
                In some hidden corner of my mind, there lie fragmented stories:
                from verses scrawled in passing, lacking any clear ending, to
                lines of code that might never fit into any particular project
                (it’s simply that I love the act of coding itself, beyond any
                reason)
              </div>
            </div>
            <div className="flex-1  border-gray-800 border bg-slate-500">
              <div className="flex flex-wrap gap-4">
                <div className="h-[100px] w-[200px] bg-slate-100">image1</div>
                <div className="h-[100px] w-[100px] bg-slate-100">image1</div>
                <div className="h-[100px] w-[300px] bg-slate-100">image1</div>
                <div className="h-[100px] w-[400px] bg-slate-100">image1</div>
                <div className="h-[100px] w-[700px] bg-slate-100">image1</div>
                <div className="h-[100px] w-[100px] bg-slate-100">image1</div>
              </div>
            </div>
          </div>
        </section>
        <section className="snap-start bg-amber-300 h-screen">
          <div className="flex px-52 py-24 h-full gap-8">
            <div className="flex flex-col flex-1 min-w-[400px] h-full text-3xl gap-5 justify-center">
              <div>
                Even the notes on my phone are littered with drafts and
                half-written lines, thoughts with no endings, never polished
                into a final version.
              </div>
              <div>Sometimes, it&apos;s just...</div>
            </div>
            <div className="flex-1  border-gray-800 border bg-slate-500"></div>
          </div>
        </section>
        <section className="snap-start bg-amber-400 h-screen">
          <div className="flex px-52 py-24 h-full gap-8">
            <div className="flex flex-col flex-1 min-w-[400px] h-full text-3xl gap-5 justify-center">
              <div>
                For the longest time, I saw these unfinished stories and
                shattered pieces as failures.
              </div>
              <div>
                Why could I never just commit to one thing, devote myself
                entirely to a single ultimate goal?
              </div>
              <div>
                Why couldn’t I define, with clarity, what I truly love and let
                everything I do revolve around that single axis?
              </div>
              <div>
                Why am I drawn to things that seem worlds apart—and why do I
                relish trying them, even if they may never lead to what most
                would call &quot;success&quot;?
              </div>
            </div>
            <div className="flex-1  border-gray-800 border bg-slate-500"></div>
          </div>
        </section>
        <section className="snap-start bg-amber-500 h-screen">
          <div className="flex px-52 py-24 h-full gap-8">
            <div className="flex flex-col flex-1 min-w-[400px] h-full text-3xl gap-5 justify-center">
              <div>But the truth is,</div>
              <div>
                Life isn’t a straight path we can walk from start to finish.
                <br />
                It’s not a story with structure, details, characters, or a clear
                conclusion.
              </div>
              <div>
                Life, in its truest form, is all about erasing, rewriting,
                beginning again.
              </div>
              <div>
                And in some way, I have come to embrace the idea of being
                unfinished.
              </div>
            </div>
          </div>
        </section>
        <section className="snap-start bg-amber-100 h-screen">
          <div className="flex px-52 py-24 h-full gap-8">
            <div className="flex flex-col flex-1 min-w-[600px]  h-full text-3xl gap-5 justify-center">
              <div>
                It took years for me to realize that I don’t need to become some
                “final draft,”
                <br />
                nor do I need to “choose one path.”
              </div>
              <div>
                This understanding has given me the courage to try, to dream, to
                pursue whatever comes in my way
              </div>
              <div>
                From coding…
                <br />
                to writing poetry…
                <br />
                to launching a start-up…
              </div>
              <div>
                Each of these drafts exists in its own distinct realm, markedly
                different from the others, yet each serves as a catalyst that
                inspires me to take risks that few would dare to embrace.
              </div>
              <div>
                Each draft ignites a boundless energy within me, propelling me
                to explore new horizons, venture into uncharted territories,
                challenge my limits, and glean insights from every single piece
                I craft.
              </div>
            </div>
          </div>
        </section>
        <section className="snap-start bg-amber-200 h-screen">
          <div className="flex flex-col px-52 py-24 h-full justify-normal">
            <div className="flex flex-col h-full min-w-[600px] text-3xl gap-5 justify-center">
              <div>
                Therefore, my life is always full of new stories and challenges
                waiting to be faced. Never have I been felt trapped in one
                direction, since I can always change, adapt, and rewrite again,
                knowing that each chapter would be another chance to write, and
                to grow
              </div>
              <div>
                I will pursue each venture until the very end, fully immersing
                myself in the experience to discover how far I can go. Here lies
                a collection of my drafts - each one was unpolished, but each
                was mine.
              </div>
              <div className="flex flex-wrap gap-2 mt-4 text-xl">
                <Link
                  href={"/coding-project"}
                  className="bg-slate-500 min-w-48 flex-1 h-[200px] flex justify-center items-center"
                >
                  Coding Projects
                </Link>
                <Link
                  href={"/start-up"}
                  className="bg-slate-500 min-w-48 flex-1 h-[200px] flex justify-center items-center"
                >
                  My Start-up: GrabStudy
                </Link>
                <Link
                  href={"/volunteer-project"}
                  className="bg-slate-500 min-w-48 flex-1 h-[200px] flex justify-center items-center"
                >
                  Volunteer Projects
                </Link>
                <Link
                  href={"/poems"}
                  className="bg-slate-500 min-w-48 flex-1 h-[200px] flex justify-center items-center"
                >
                  Poems
                </Link>
                <Link
                  href={"/culture-preservation"}
                  className="bg-slate-500 min-w-48 flex-1 h-[200px] flex justify-center items-center"
                >
                  Culture Preservation: Tuồng
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="snap-start bg-amber-300 h-screen">
          <div className="flex flex-col px-52 py-24 h-full justify-normal">
            <div className="flex flex-col h-full min-w-[600px] text-3xl gap-5 justify-center">
              <div>
                Perhaps one day, I will bring closure to all the things I’ve
                begun.
              </div>
              <div>
                What now may seem like mere drafts, I refuse to discard into the
                abyss.
              </div>
              <div>
                But now, I cherish the moments spent in this liminal space—it
                serves as a motivation to set aside thoughts of the challenges
                and failures that may lie ahead, replacing them with a
                willingness to try. Since I know that I always have the
                opportunity to attempt again, to approach things differently, to
                start anew.
              </div>
              <div>
                Because sometimes, the most captivating stories are those that
                remain unfinished.
              </div>
            </div>
          </div>
        </section>
      </div>

      <Link
        href="/#section-1"
        className="fixed bottom-8 right-8 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 focus:outline-none transition-opacity duration-300 select-none"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </>
  );
}
