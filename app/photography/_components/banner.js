import Image from "next/image";
import section1Pic from "@/public/img/coding/section1.png";
import star from "@/public/icon/star.png";
import planet from "@/public/icon/planet.png";
import Navbar from "@/components/Navbar/Navbar";

export default function Banner() {
  return (
    <section
      className="snap-start h-screen"
      style={{ backgroundColor: "#212121" }}
    >
      <Navbar />
      <div className="gap-8 h-screen flex flex-col relative p-20">
        <div className="text-3xl lg:text-6xl font-semibold text-white flex flex-col gap-2">
          <div>PHOTOGRAPHY & FILMING</div>
        </div>
        <div className="flex flex-col gap-4 text-white max-w-[800px]">
          <div>
            In some inexplicable way, photography has become more than just a
            hobby or skill. It’s an act of preserving fragments of life’s
            unstructured journey—a way to hold moments, even if just for an
            instant, in a world that never stands still.
          </div>
          <div>
            Through my lens, I explore these contrasting fragments of myself. My
            photography captures hidden stories, like a glimpse into the
            ever-shifting landscape of Vietnam, caught in celebration and
            history during Independence Day. I aim to show not only the surface
            of these moments but the profound, often unfinished tales they
            carry, allowing them to stay untouched yet forever changed by the
            experience.
          </div>
        </div>
      </div>
    </section>
  );
}
