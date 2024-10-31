import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Slide13() {
  return (
    <section id="business-idea" className="snap-start h-screen ">
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
                Almost companies require their employees to fluently use English
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
  );
}
