import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import slide37 from "@/public/img/slide37.png";

export default function Page() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-auto text-black">
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
      <section id="business-idea" className="snap-start bg-amber-200 h-screen ">
        <div className="gap-8 h-screen flex flex-col p-10">
          <div className="text-6xl">Business Idea & performance</div>
          <div className="p-3 bg-slate-100 rounded-sm text-center text-3xl">
            A Life-Changing Solution for English learners in Vietnam
          </div>
          <div className="flex h-screen gap-4 flex-wrap md:mt-12 lg:mt-24">
            <div className="flex flex-col flex-1  min-w-[400px] gap-4 text-2xl">
              <div className="text-5xl">1. Our ideation </div>
              <div>There is a big demand for English when:</div>
              <ul className="list-disc pl-6">
                <li>
                  70% of Jobs in Vietnam requires at least 1 round of interview
                </li>
                <li>
                  Almost companies require their employees to fluently use
                  English
                </li>
                <li>
                  Các trung tâm dạy Tiếng Anh tràn lan nhưng không mang lại hiệu
                  quả nhanh chóng
                </li>
              </ul>
            </div>
            <div className="flex flex-1">
              <Carousel className="w-full ">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="flex min-h-[200px] lg:min-h-96 items-center justify-center p-6 bg-slate-400">
                        {index + 1}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="snap-start bg-amber-300 h-screen">
        <div className="gap-8 h-screen flex flex-col p-10">
          <div className="text-5xl">2. Where is the demand gap?</div>
          <div className="flex h-screen md:gap-24 lg:gap-48 flex-wrap mt-16">
            <div className="flex flex-col flex-1  min-w-[400px] gap-4 text-2xl">
              <div className="text-3xl">Người học</div>
              <div>
                - Instant problem-solver cho những chỗ họ không hiểu thay vì
                phải đăng ký 1 khoá học dài
              </div>
              <div>
                - Quá bận rộn để sắp xếp 1 buổi học fixed trong tuần. Muốn học
                everywhere, anytime, muốn học là có thể book được giáo viên luôn
              </div>
              <div>
                - Cần người dạy customize theo đúng skillset muốn học, theo đúng
                learning style của họ để có hiệu quả cao nhất
              </div>
            </div>
            <div className="flex flex-col flex-1  min-w-[400px] gap-4 text-2xl">
              <div className="text-3xl">Người dạy </div>
              <div>
                - Muốn được linh hoạt thời gian, khi nào sẵn sàng dạy là có thể
                dạy luôn
              </div>
              <div>- Nhận ngay allowance sau khi nhận học sinh</div>
              <div>
                - Được phân dạy theo từng kĩ năng, chủ đề mà bản thân thấy tự
                tin
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="snap-start bg-amber-400 h-screen">
        <div className="gap-8 h-screen flex flex-col p-10">
          <div className="text-5xl">3. Business Idea</div>
          <div className="bg-slate-500 w-full h-full">image</div>
        </div>
      </section>
      <section className="snap-start bg-amber-400 h-screen">
        <div className="gap-8 h-screen flex flex-col p-10">
          <div className="text-xl bg-red-500 w-fit text-white px-2">
            LEARN ON DEMAND, NO NEED TO ENROLL IN A FULL COURSE.
          </div>
          <div className="h-full flex gap-16 overflow-x-auto">
            <div className=" min-w-[400px] flex-auto h-full">
              <div className="flex justify-center items-center h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-2xl font-semibold text-center p-4">
                Before learning
              </div>
              <div className="border border-dashed border-slate-600 rounded-3xl p-6 text-2xl flex flex-col gap-4 bg-white mt-8">
                <div>- Facing difficulties with IELTS Writing map tasks.</div>
                <div>- Wants to learn English for interview preparation.</div>
                <div>
                  - Interested in learning English for specific purposes (IT,
                  Marketing, Flight Attendant, beauty pageant preparation).
                </div>
                <div>
                  - Wants to focus on English for soft skills (Public Speaking,
                  Debate).
                </div>
              </div>
            </div>
            <div className=" min-w-[250px] flex-auto h-full">
              <div className="flex justify-center items-center h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-2xl font-semibold text-center p-4">
                Open app, type your need
              </div>
              <div className="border border-dashed border-slate-600 rounded-3xl p-6 text-2xl flex flex-col gap-4 bg-white mt-8">
                <div>
                  - Allow users to select specific needs and areas of interest.
                </div>
                <div>
                  - Enable users to input questions or problems they want to
                  solve during a session.
                </div>
              </div>
            </div>
            <div className=" min-w-[400px] flex-auto h-full">
              <div className="flex justify-center items-center h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-2xl font-semibold text-center p-4">
                The app automatically filter & connect with instructor
              </div>
              <div className="border border-dashed border-slate-600 rounded-3xl p-6 text-2xl flex flex-col gap-4 bg-white mt-8">
                <div>
                  - Automatically filter information and recommend suitable
                  courses.
                </div>
                <div>
                  - Automatically assign a teacher who is qualified to answer
                  the student's questions within 5 minutes.
                </div>
              </div>
            </div>
            <div className=" min-w-[300px] flex-auto h-full">
              <div className="flex justify-center items-center h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-2xl font-semibold text-center p-4">
                Pay per session
              </div>
              <div className="border border-dashed border-slate-600 rounded-3xl p-6 text-2xl flex flex-col gap-4 bg-white mt-8">
                <div>
                  - Learners only need to pay per session, without the need to
                  commit to a long-term course.
                </div>
                <div>
                  - Learners can learn exactly what they need, focusing on
                  specific problems without starting from the beginning.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="snap-start bg-amber-300 h-full w-full relative">
        <Image src={slide37} layout="fill" objectFit="contain" alt="slide37" />
      </section>
      <section
        id="coding-strategy"
        className="snap-start bg-amber-300 h-screen"
      >
        <div className="gap-8 h-screen flex flex-col justify-center align-middle text-center">
          <div className="text-6xl">Coding Strategy</div>
        </div>
      </section>
      <Link
        href="/start-up/#main"
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
    </div>
  );
}
