import Image from "next/image";
import Character from "./../components/Character"

export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Mobile Version */}
      <div className="relative w-full aspect-[7/10] overflow-hidden md:hidden">
        <img
          src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/main+p3.png"
          alt="Main Photo"
          className="h-full w-full object-cover"
          style={{ objectPosition: "4% center" }}
          loading="eager"
          decoding="async"
        />
      </div>
      {/* Desktop Version */}
      <div className="relative hidden md:block md:w-[96vw] md:aspect-[16/7] overflow-hidden">
        <Image
          src="https://beaverworkshop.s3.eu-west-3.amazonaws.com/Images/main+p.png"
          alt="Main Photo"
          fill
          className="object-cover md:object-center"
          sizes="96vw"
          priority
          unoptimized
        />
        <Character />
      </div>
    </main>
  );
}
