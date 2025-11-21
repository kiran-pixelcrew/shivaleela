import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="block sm:hidden w-full">
        <Image
          className="object-cover w-full h-auto"
          src={"/Mbanner.png"}
          width={600}
          height={300}
          alt="mobile banner"
        />
      </div>

      <div className="hidden sm:block w-full">
        <Image
          className="object-cover w-full h-auto"
          src={"/banner.png"}
          width={1200}
          height={400}
          alt="banner"
        />
      </div>
    </div>
  );
}
