import Image from "next/image";
import react from "@/public/img/coding/react.png";
import redux from "@/public/img/coding/redux.png";

export default function Section2() {
  return (
    <section
      className="snap-start h-screen"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col text-center relative">
        <div className="text-4xl font-semibold mt-20 text-white flex flex-col gap-2">
          <div>Technology used in the App</div>
          <div>Front-end</div>
        </div>
        <div className="p-24 pt-12 flex w-full justify-center gap-24">
          <div className="w-[300px] text-start flex flex-col gap-4">
            <div className="h-[300px] rounded-lg relative">
              <Image src={react} className="rounded-3xl" alt="react" />
            </div>
            <div className="text-white">
              React is a free and open-source front-end JavaScript library for
              building user interfaces or UI components. We use React to build
              the screen and view layer of the LukaMove Front-end Application.
            </div>
          </div>
          <div className="w-[300px] text-start flex flex-col gap-4">
            <div className="h-[300px] rounded-lg relative">
              <Image
                src={redux}
                className="rounded-3xl p-10 bg-white"
                alt="redux"
              />
            </div>
            <div className="text-white">
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
