import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Slide12() {
  return (
    <section
      id="main"
      className="items-center snap-start bg-amber-100 h-screen"
    >
      <Navbar />
      <div className="flex justify-center h-screen">
        <div className="max-w-[1200px] flex flex-col justify-center align-middle text-center gap-8">
          <div className="text-6xl mb-10">Grab Study</div>
          <div className="text-4xl">An instant problem - solver</div>
          <div className="text-4xl">
            An 1-1 online edu-mentoring app, connecting teachers and learners
            within 10 seconds without pre-booking
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/start-up/#business-idea">
              <Button className="w-80 h-16 text-xl">
                Business Idea & performance
              </Button>
            </Link>
            <Link href="/start-up/#coding-strategy">
              <Button className="w-80 h-16 text-xl">Coding Strategy</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
