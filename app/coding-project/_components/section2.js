import Image from "next/image";
import react from "@/public/img/coding/react.png";
import redux from "@/public/img/coding/redux.png";

export default function Section2() {
  return (
    <section
      className="snap-start h-screen"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col relative">
        <div className="text-center text-2xl lg:text-4xl font-semibold mt-10 lg:mt-20 text-white flex flex-col gap-2">
          <div>Technology used in the App</div>
          <div>Front-end</div>
        </div>
        <div className="h-full p-24 pt-12 flex justify-evenly gap-6">
          <div className="max-w-[300px] flex flex-col gap-4">
            <div className="w-full max-h-[300px] h-full relative">
              <Image src={react} fill objectFit="contain" alt="react" />
            </div>
            <div className="text-white h-full">
              React is a free and open-source front-end JavaScript library for
              building user interfaces or UI components. We use React to build
              the screen and view layer of the LukaMove Front-end Application.
            </div>
          </div>
          <div className="max-w-[300px] flex flex-col gap-4">
            <div className="w-full max-h-[300px] h-full relative">
              <Image
                src={redux}
                fill
                objectFit="contain"
                className="rounded-3xl"
                alt="redux"
              />
            </div>
            <div className="text-white h-full">
              Redux is an open-source JavaScript library for managing
              application state. We used Redux to managing application state of
              LukaMove Front-end Application. 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
