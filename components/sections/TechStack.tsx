import { Marquee } from "@/components/eldoraui/marquee";
import { TechStackData } from "@/data/techstack";
import Image from "next/image";

export function TechStack() { 
  return (
    <section id="logos">
      <div className="myContainer mx-auto px-4 py-6 md:px-8">
        <div className="relative">
          <Marquee className="max-w-full [--duration:40s]">
            {TechStackData.map((company, idx) => (
              <Image
                key={idx}
                width={112}
                height={40}
                src={company.url}
                className="h-10 w-28"
                alt={company.name}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
