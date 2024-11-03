import Navbar from "@/components/Navbar/Navbar";
import pic1 from "@/public/img/culture/Slide1.PNG";
import Image from "next/image";
import star from "@/public/icon/star.png";
import Link from "next/link";
import { CultureData } from "@/data/culture";

export default function Section2() {
  const data = CultureData.slice(0, 8);

  return (
    <section
      id="section-2"
      className="items-center snap-start h-screen relative overflow-auto"
      style={{
        backgroundColor: "#212121",
      }}
    >
      <div className="flex flex-col p-20 h-screen relative">
        <div className="flex flex-col">
          <div className="text-3xl xl:text-5xl font-semibold text-amber-500">
            CULTURAL PRESERVATION
          </div>
          <div className="mt-5 xl:text-xl text-white">
            Tuồng, an art form that has existed for centuries and stands as one
            of the symbols of Vietnamese culture, is gradually fading as its
            essence no longer resonates with the younger generation,
            particularly in terms of content and language. It’s not that young
            people don’t appreciate culture and traditional art forms, but it is
            difficult for them to preserve it if they don’t truly enjoy or
            connect with it. That’s why I have decided to transform certain
            aspects that could be modernized to make Tuồng more relatable and
            accessible for young people—such as reshaping its content to uncover
            hidden facets of history and uncharted stories—since Gen Z is always
            captivated by lesser-known narratives!
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center py-12 xl:py-24 transition-all ">
          {data.map((item, idx) => {
            return (
              <Link href={`/culture-preservation/#pic-${idx}`}>
                <Image
                  width={300}
                  src={item}
                  className="hover:scale-150 duration-150 hover:border-2 hover:border-amber-400"
                  alt={`pic-${idx}`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
