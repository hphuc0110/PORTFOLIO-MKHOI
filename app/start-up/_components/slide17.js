export default function Slide17() {
  return (
    <section className="snap-start bg-amber-400 h-screen">
      <div className="gap-8 h-screen flex flex-col p-10">
        <div className="text-3xl bg-blue-500 w-fit text-white px-2 font-semibold">
          LEARN EVERYWHERE, ANYTIME
        </div>
        <div className="flex h-screen md:gap-24 lg:gap-48 flex-wrap mt-16">
          <div className="flex flex-col flex-1  min-w-[400px] gap-4 text-2xl">
            <div>image1</div>
            <div>Finding instructors in the middle of the night</div>
            <div className="flex">
              <div>image2</div>
              <div>image3</div>
            </div>
            <div className="text-center">
              Busy workers with only 20 min of free time
            </div>
          </div>
          <div className="flex flex-col flex-1  min-w-[400px] gap-4 text-3xl">
            <div>
              Automatically connect with a suitable instructor who can meet your
              needs in just 5 minutes
            </div>
            <div>
              Learn English and get answers immediately no matter where or when
              you are
            </div>
            <div className="bg-red-500 w-fit text-white px-2 font-semibold">
              GRABSTUDY: Your English, On Demand
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
