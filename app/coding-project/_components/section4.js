import Image from "next/image";
import docker from "@/public/img/coding/docker.svg";
import cloud from "@/public/img/coding/cloud.png";

export default function Section4() {
  return (
    <section
      className="snap-start h-screen"
      style={{ backgroundColor: "#07080C" }}
    >
      <div className="gap-8 h-screen flex flex-col text-center relative">
        <div className="text-4xl font-semibold mt-20 text-white flex flex-col gap-2">
          <div>Deployment & Hosting </div>
        </div>
        <div className="p-24 pt-12 flex w-full justify-center gap-24">
          <div className="w-[300px] text-start flex flex-col gap-4">
            <div className="h-[300px] rounded-lg relative">
              <Image
                src={docker}
                className="rounded-3xl bg-white p-5"
                alt="docker"
              />
            </div>
            <div className="text-white">
              We used Docker to package system components—such as the front-end
              application, API Gateway, API services, background services, and
              caching service—into containers, enabling seamless deployment on
              Amazon Web Services.
            </div>
          </div>
          <div className="w-[300px] text-start flex flex-col gap-4">
            <div className="h-[300px] rounded-lg relative">
              <Image
                src={cloud}
                className="rounded-3xl p-10 bg-white"
                alt="cloud"
              />
            </div>
            <div className="text-white">
              We used Google Cloud Platform to use API to build Map such as the
              front-end application, API Gateway, API services, background
              services, and caching service—into containers.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
