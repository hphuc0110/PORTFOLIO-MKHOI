import Image from "next/image";
import s3 from "@/public/img/coding/s3.png";
import nginx from "@/public/img/coding/nginx.png";

export default function Section5() {
  return (
    <section
      className="snap-start h-screen"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col text-center relative">
        <div className="p-24 pt-12 flex w-full justify-center gap-24 mt-36">
          <div className="w-[300px] text-start flex flex-col gap-4">
            <div className="h-[300px] rounded-lg relative">
              <Image src={s3} className="rounded-3xl bg-white" alt="s3" />
            </div>
            <div className="text-white">
              We use Amazon S3 for storing images uploaded by
              users high-performance HTTP server and reverse proxy.
            </div>
          </div>
          <div className="w-[300px] text-start flex flex-col gap-4 ">
            <div className="h-[300px]relative rounded-3xl bg-white flex justify-center">
              <Image
                width={270}
                height={300}
                src={nginx}
                className="rounded-3xl p-7 bg-white"
                alt="nginx"
              />
            </div>
            <div className="text-white">
              NGINX is a free, open-source, high-performance HTTP server and
              reverse proxy. We used NGINX as a proxy server for our system 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
