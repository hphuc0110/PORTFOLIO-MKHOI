import Image from "next/image";

export default function HImage({ url, alt }) {
  return (
    <div className="relative ">
      <Image
        className="rounded-lg mx-auto"
        src={url}
        fill
        sizes=""
        alt={alt ?? "image"}
      />
    </div>
  );
}
