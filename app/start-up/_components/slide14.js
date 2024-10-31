export default function Slide14() {
  return (
    <section className="snap-start h-screen">
      <div className="gap-8 h-screen flex flex-col p-10">
        <div className="text-5xl">2. Where is the demand gap?</div>
        <div className="flex h-screen md:gap-24 lg:gap-48 flex-wrap mt-16">
          <div className="flex flex-col flex-1  min-w-[400px] gap-4 text-2xl">
            <div className="text-3xl">Người học</div>
            <div>
              - Instant problem-solver cho những chỗ họ không hiểu thay vì phải
              đăng ký 1 khoá học dài
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
              - Được phân dạy theo từng kĩ năng, chủ đề mà bản thân thấy tự tin
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
