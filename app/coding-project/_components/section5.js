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
        <div className="text-2xl lg:text-4xl font-semibold mt-20 text-white flex flex-col gap-2">
          <div>Deployment & Hosting </div>
        </div>
        <div className="p-24 pt-12 flex h-full justify-evenly gap-24">
          <div className="max-w-[300px] text-start flex flex-col gap-4">
            <div className="w-full max-h-[300px] h-full rounded-lg relative">
              <Image
                src={s3}
                fill
                objectFit="contain"
                className="rounded-3xl"
                alt="s3"
              />
            </div>
            <div className="text-white h-full">
              We use Amazon S3 for storing images uploaded by
              users high-performance HTTP server and reverse proxy.
            </div>
          </div>
          <div className="max-w-[300px] text-start flex flex-col gap-4 ">
            <div className="w-full max-h-[300px] h-full relative rounded-3xl flex justify-center">
              <Image
                fill
                objectFit="contain"
                src={nginx}
                className="rounded-3xl"
                alt="nginx"
              />
            </div>
            <div className="text-white h-full">
              NGINX is a free, open-source, high-performance HTTP server and
              reverse proxy. We used NGINX as a proxy server for our system 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
