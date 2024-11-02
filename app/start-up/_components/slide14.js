import section31 from "@/public/img/startup/section31.png";
import section32 from "@/public/img/startup/section32.png";
import Image from "next/image";
export default function Slide14() {
  return (
    <section className="snap-start h-screen bg-black text-white">
      <div className="gap-8 h-screen flex flex-col justify-center items-center pt-24">
        <div className="text-5xl text-center font-semibold">
          Where is the demand gap?
        </div>
        <div className="flex h-screen mt-16 gap-20">
          <div className="flex flex-col w-[500px] gap-4 text-xl items-center">
            <div className="flex flex-col items-center gap-4">
              <Image src={section31} alt="section31" />
              <div className="text-3xl">Teacher</div>
            </div>
            <div className="flex justify-center  gap-2">
              <div className="w-2 h-1 rounded-full bg-white mt-3" />
              <div>
                An instant problem-solver for areas they don’t understand,
                without the need to sign up for a long course.
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-1 rounded-full bg-white mt-3" />
              <div>
                Too busy to commit to a fixed weekly class. They want to learn
                anywhere, anytime, and be able to book a teacher on demand.
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-1 rounded-full bg-white mt-3" />
              <div>
                Need an instructor who can customize lessons to match their
                specific skillset and learning style for the highest
                effectiveness.
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[500px] gap-4 text-xl items-center">
            <div className="flex flex-col items-center gap-4">
              <Image src={section32} alt="section31" />
              <div className="text-3xl">Learner</div>
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-1 h-1 rounded-full bg-white mt-3" />
              <div>
                Want flexible timing; able to start teaching as soon as
                available.
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-1 h-1 rounded-full bg-white mt-3" />
              <div>
                Receive an allowance immediately after taking on a student.
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-1 h-1 rounded-full bg-white mt-3" />
              <div>
                Assigned to teach specific skills or topics they feel confident
                in.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
