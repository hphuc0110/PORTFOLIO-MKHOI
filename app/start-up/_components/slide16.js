export default function Slide16() {
  return (
    <section className="snap-start bg-amber-400 h-screen">
      <div className="gap-8 h-screen flex flex-col p-10">
        <div className="text-3xl bg-red-500 w-fit text-white px-2 font-semibold">
          LEARN ON DEMAND, NO NEED TO ENROLL IN A FULL COURSE.
        </div>
        <div className="h-full flex gap-16 overflow-x-auto">
          <div className="flex-auto h-full">
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
          <div className="flex-auto h-full">
            <div className="flex justify-center items-center h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-2xl font-semibold text-center p-4">
              Open app, type your need
            </div>
            <div className="border border-dashed border-slate-600 rounded-3xl p-6 text-2xl flex flex-col gap-4 bg-white mt-8">
              <div>
                - Allow users to select specific needs and areas of interest.
              </div>
              <div>
                - Enable users to input questions or problems they want to solve
                during a session.
              </div>
            </div>
          </div>
          <div className="flex-auto h-full">
            <div className="flex justify-center items-center h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-2xl font-semibold text-center p-4">
              The app automatically filter & connect with instructor
            </div>
            <div className="border border-dashed border-slate-600 rounded-3xl p-6 text-2xl flex flex-col gap-4 bg-white mt-8">
              <div>
                - Automatically filter information and recommend suitable
                courses.
              </div>
              <div>
                - Automatically assign a teacher who is qualified to answer the
                student's questions within 5 minutes.
              </div>
            </div>
          </div>
          <div className="flex-auto h-full">
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
  );
}
