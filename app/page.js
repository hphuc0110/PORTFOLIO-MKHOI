import Navbar from "@/components/Navbar/Navbar";
import ArrowUp from "@/public/icon/arrow-up.svg";
import ArrowDown from "@/public/icon/arrow-down.svg";
import star3 from "@/public/icon/star-3.png";
import star from "@/public/icon/star.png";
import pic1 from "@/public/img/dashboard/1.png";
import section2Content from "@/public/img/dashboard/ContentCTA.png";
import section31 from "@/public/img/dashboard/section31.png";
import section32 from "@/public/img/dashboard/section32.png";
import section33 from "@/public/img/dashboard/section33.png";
import section34 from "@/public/img/dashboard/section34.png";
import section35 from "@/public/img/dashboard/section35.png";
import section4 from "@/public/img/dashboard/section4.png";
import section62 from "@/public/img/dashboard/section62.png";
import section8 from "@/public/img/dashboard/section8.jpg";
import planet from "@/public/icon/planet.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-auto text-black">
        <section
          id="section-1"
          className="snap-start h-screen"
          style={{ backgroundColor: "#26149c" }}
        >
          <div className="h-screen flex flex-col">
            <Navbar />
            <div className="h-full flex justify-center relative">
              <Image src={pic1} layout="fill" objectFit="contain" alt="pic1" />
            </div>
          </div>
        </section>
        <section
          className="snap-start h-screen relative"
          style={{ backgroundColor: "#212121" }}
        >
          <div className="flex h-screen justify-center items-center relative">
            <div className="h-fit">
              <Image
                src={section2Content}
                objectFit="contain"
                alt="section2Content"
              />
            </div>
            <Image
              src={star}
              width={150}
              height={150}
              alt="star"
              className="absolute top-0 left-0"
            />
            <Image
              src={star}
              width={150}
              height={150}
              alt="star"
              className="absolute bottom-[50px] left-[30px]"
            />
            <Image
              src={star}
              width={150}
              height={150}
              alt="star"
              className="absolute bottom-[30px] -right-0"
            />
            <Image
              src={planet}
              width={1000}
              height={1000}
              alt="star"
              className="absolute top-0 -right-0"
            />
          </div>
        </section>
        <section
          className="snap-start h-screen py-10 relative"
          style={{
            background: "#07080C",
          }}
        >
          <div
            className="text-white text-2xl flex justify-center items-center"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            <div className="flex flex-col gap-16">
              <div>
                In some inexplicable way, I was born to be a{" "}
                <strong>collection of broken pieces</strong>: I have{" "}
                <strong>A LOVE OF SPORTS</strong>,<br /> something raw and
                rugged, HOWEVER, at the same time, I’m drawn to{" "}
                <strong>
                  CRAFTING POETRY AND
                  <br />
                  CAPTURING MOMENTS
                </strong>{" "}
                in photos—something soft and dreamlike.
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-1 max-w-[385px] max-h-[337px] relative">
                    <Image
                      src={section31}
                      className="rounded-xl"
                      alt="section31"
                    />
                  </div>
                  <div className="flex-1 max-w-[385px] max-h-[337px] relative">
                    <Image
                      src={section32}
                      className="rounded-xl"
                      alt="section32"
                    />
                  </div>
                  <div className="flex-1 max-w-[397px] max-h-[337px] relative">
                    <Image
                      src={section33}
                      className="rounded-xl"
                      alt="section33"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 ">
                  <div className="flex-1 max-w-[749px] max-h-[337px] relative">
                    <Image
                      src={section34}
                      className="rounded-xl"
                      alt="section31"
                    />
                  </div>
                  <div className="flex-1 max-w-[443px] max-h-[337px] relative">
                    <Image
                      src={section35}
                      className="rounded-xl"
                      alt="section32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="snap-start h-screen relative"
          style={{ backgroundColor: "#000" }}
        >
          <div className="gap-8 h-screen flex flex-col p-10">
            <Image
              src={section4}
              layout="fill"
              objectFit="contain"
              alt="section4"
            />
          </div>
        </section>
        <section className="snap-start h-screen relative bg-space bg-repeat flex flex-col items-center pt-32 px-16 gap-10">
          <div className="text-white text-3xl font-semibold w-fit text-center">
            For the longest time, I saw
            <br /> these unfinished stories and
            <br /> shattered pieces as FAILURES.
          </div>
          <div className="flex flex-col gap-4 font-semibold">
            <div className="bg-white min-w-[500px] flex justify-between items-center rounded-lg gap-4 p-3">
              <Image width={32} height={32} src={star3} alt="star3" />
              <div>
                Why could I never just commit to one thing, devote myself
                entirely to a single ultimate goal?
              </div>
              <div className="bg-slate-300 rounded-full p-2 text-white">
                <Image src={ArrowUp} alt="arrow-up" />
              </div>
            </div>
            <div className="bg-white w-full flex justify-between items-center rounded-lg gap-4 p-3">
              <Image width={32} height={32} src={star3} alt="star3" />
              <div>
                Why couldn’t I define, with clarity, what I truly love and let
                everything I do revolve around that single axis?
              </div>
              <div className="bg-slate-300 rounded-full p-2 text-white">
                <Image src={ArrowDown} alt="arrow-up" />
              </div>
            </div>
            <div className="bg-white w-full flex justify-between items-center rounded-lg gap-4 p-3">
              <Image width={32} height={32} src={star3} alt="star3" />
              <div>Why am I drawn to things that seem worlds apart?</div>
              <div className="bg-slate-300 rounded-full p-2 text-white">
                <Image src={ArrowDown} alt="arrow-up" />
              </div>
            </div>
            <div className="bg-white w-full flex justify-between items-center rounded-lg gap-4 p-3">
              <Image width={32} height={32} src={star3} alt="star3" />
              <div>
                Why do I relish trying them, even if they may never lead to what
                most would call "success"?
              </div>
              <div className="bg-slate-300 rounded-full p-2 text-white">
                <Image src={ArrowDown} alt="arrow-up" />
              </div>
            </div>
          </div>
          <Image
            src={star}
            width={150}
            height={150}
            alt="star"
            className="absolute bottom-[30px] -right-0"
          />
          <Image
            src={star}
            width={150}
            height={150}
            alt="star"
            className="absolute top-[30px] -left-0"
          />
        </section>
        <section className="snap-start h-screen relative bg-space pt-32 px-16 xl:px-40 overflow-hidden transition-all">
          <div className="grid grid-cols-4 gap-8 xl:gap-10 2xl:gap-12 xl:content-end ">
            <div className="text-white col-span-2 flex flex-col h-fit gap-10 text-lg lg:text-lg xl:text-xl font-semibold">
              <div>
                Therefore, my life is always full of new stories and challenges
                waiting to be faced. Never have I been felt trapped in one
                direction, since I can always change, adapt, and rewrite again,
                knowing that each chapter would be another chance to write, and
                to grow.
              </div>
              <div>
                I will pursue each venture until the very end, fully immersing
                myself in the experience to discover how far I can go. Here lies
                a collection of my drafts - each one was unpolished, but each
                was mine.
              </div>
            </div>
            <Link href="/coding-project">
              <div className="text-center h-[250px] font-semibold bg-[url('/img/dashboard/section61.png')] rounded-md bg-cover bg-no-repeat bg-center">
                <div className="py-3  rounded-tr-md rounded-tl-md bg-white">
                  <div>Coding Projects</div>
                </div>
              </div>
            </Link>
            <Link href="/start-up">
              <div className="text-center h-[250px] font-semibold bg-white rounded-md bg-cover bg-no-repeat bg-center">
                <div className="py-3  rounded-tr-md rounded-tl-md bg-white">
                  <div>My Start-up: GrabStudy</div>
                </div>
                <div className="flex mt-10  justify-center">
                  <Image
                    width={100}
                    height={100}
                    src={section62}
                    alt="section62"
                  />
                </div>
              </div>
            </Link>
            <Link href="/volunteer-project" className=" col-end-3">
              <div className=" text-center h-[250px] font-semibold bg-[url('/img/dashboard/section63.png')] rounded-md bg-cover bg-no-repeat bg-center">
                <div className="py-3  rounded-tr-md rounded-tl-md bg-white">
                  <div>Volunteer Projects</div>
                </div>
              </div>
            </Link>
            <Link href="/photography">
              <div className="col-end-4 text-center h-[250px] font-semibold bg-[url('/img/dashboard/section64.png')] rounded-md bg-cover bg-no-repeat bg-center">
                <div className="py-3  rounded-tr-md rounded-tl-md bg-white">
                  <div>Photography</div>
                </div>
              </div>
            </Link>
            <Link href="/culture-preservation">
              <div className="col-end-5 text-center h-[250px] font-semibold bg-[url('/img/dashboard/section65.png')] rounded-md bg-cover bg-no-repeat">
                <div className="py-3  rounded-tr-md rounded-tl-md bg-white">
                  <div>Culture Preservation</div>
                </div>
              </div>
            </Link>
          </div>
          <Image
            src={star}
            width={150}
            height={150}
            alt="star"
            className="absolute bottom-[50px] left-[30px]"
          />
        </section>
        <section className="snap-start bg-space h-screen flex items-center justify-center transition-all relative">
          <div className="bg-white rounded-xl flex gap-10 flex-col xl:flex-row">
            <div className="flex flex-col text-xl gap-6 max-w-[600px] p-10">
              <div className="text-3xl">
                Perhaps one day, I will bring closure to all the things I’ve
                begun.
              </div>
              <div>
                What now may seem like mere drafts, I refuse to discard into the
                abyss.
              </div>
              <div>
                But now, I cherish the moments spent in this liminal space.
                Since I know that I always have the opportunity to attempt
                again, to approach things differently, to start anew. Because
                sometimes, the most captivating stories are those that remain
              </div>
            </div>
            <div className="md:h-[400px] xl:h-[400px] xl:w-[400px] relative">
              <Image
                src={section8}
                className="xl:rounded-tr-xl rounded-br-xl xl:rounded-bl-none md:rounded-bl-xl"
                fill
                alt="section8"
              />
            </div>
          </div>
          <Image
            src={star}
            width={150}
            height={150}
            alt="star"
            className="absolute top-[30px] -right-0"
          />
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
