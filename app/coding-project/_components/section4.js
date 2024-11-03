import Image from "next/image";
import docker from "@/public/img/coding/docker.png";
import cloud from "@/public/img/coding/cloud.png";

export default function Section4() {
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
                src={docker}
                fill
                objectFit="contain"
                className="rounded-3xl "
                alt="docker"
              />
            </div>
            <div className="text-white h-full">
              We used Docker to package system components—such as the front-end
              application, API Gateway, API services, background services, and
              caching service—into containers, enabling seamless deployment on
              Amazon Web Services.
            </div>
          </div>
          <div className="max-w-[300px] text-start flex flex-col gap-4">
            <div className="w-full max-h-[300px] h-full rounded-lg relative">
              <Image
                src={cloud}
                fill
                objectFit="contain"
                className="rounded-3xl "
                alt="cloud"
              />
            </div>
            <div className="text-white h-full">
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
