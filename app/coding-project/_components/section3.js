import Image from "next/image";
import go from "@/public/img/coding/go.svg";
import redis from "@/public/img/coding/redis.webp";
import postgre from "@/public/img/coding/postgre.png";

export default function Section3() {
  return (
    <section
      className="snap-start h-screen"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col text-center relative">
        <div className="text-4xl font-semibold mt-20 text-white flex flex-col gap-2">
          <div>Back-end</div>
        </div>
        <div className="p-24 pt-12 flex w-full justify-center gap-24">
          <div className="w-[300px] text-start flex flex-col gap-4">
            <div className="h-[300px] rounded-lg relative">
              <Image src={go} className="rounded-3xl bg-white" alt="go" />
            </div>
            <div className="text-white">
              Go is a powerful language known for its clarity, efficiency, and
              expressiveness. Its concurrency features simplify writing programs
              optimized for multicore and networked environments, while its
              innovative type system supports modular and adaptable code
              structures. We utilize Go to build the entire LukaMove API
              Service. 
            </div>
          </div>
          <div className="w-[300px] text-start flex flex-col gap-4">
            <div className="h-[300px] rounded-lg relative">
              <Image
                src={redis}
                className="rounded-3xl p-10 bg-white"
                alt="redis"
              />
            </div>
            <div className="text-white">
              Redis is an open-source, BSD-licensed, in-memory data structure
              store that functions as a database, cache, and message broker. It
              supports various data types like strings, hashes, lists, sets,
              sorted sets with range queries, bitmaps, hyperloglogs, geospatial
              indexes with radius queries, and streams. We leverage Redis to
              develop the MTHUB Caching Service.
            </div>
          </div>
          <div className="w-[300px] text-start flex flex-col gap-4">
            <div className="h-[300px] rounded-lg relative">
              <Image
                src={postgre}
                className="rounded-3xl p-10 bg-white"
                alt="postgre"
              />
            </div>
            <div className="text-white">
              PostgreSQL is a robust, open-source object-relational database
              system with over 15 years of continuous development, backed by a
              trusted architecture that ensures reliability, data integrity, and
              accuracy. We utilize PostgreSQL to handle MTHUB’s operational data
              management.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
