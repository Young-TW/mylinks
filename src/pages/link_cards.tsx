import Image from "next/legacy/image";
import OsuCard from "./osu_card";
import { github_stats } from "../data/github_card";
import { links } from "../data/links";

export default function LinkCards() {
  return (
    <div className="flex flex-wrap">
      <OsuCard />
      {github_stats.map((p) => {
        return (
          <div
            className="h-48 w-64 mt-6 rounded-lg mx-auto flex justify-center items-center hover:animate-pulse"
            key={p.alt}
          >
            <a
              href="https://github.youngtw.net"
              title="GitHub"
            >
              <Image
                src={p.src}
                height={p.height}
                width={p.width}
                objectFit="cover"
                alt={p.alt}
                className="rounded-lg"
              />
            </a>
          </div>
        );
      })}
      {links.map((p) => {
        return (
          <div
            className="h-48 w-64 mt-6 rounded-lg mx-auto hover:animate-pulse"
            key={p.title}
          >
            <a href={p.link}>
              <div
                className="w-fit h-1/2 rounded-lg"
                style={{ width: "100%", height: "50%", position: "relative" }}
              >
                <Image
                  src={p.bg}
                  layout="fill"
                  objectFit="cover"
                  alt={p.title}
                  className="rounded-lg"
                />
              </div>
              <div className="h-1/2 rounded-lg backdrop-blur-lg opacity-90 bg-slate-600">
                <h3 className="notosans text-center text-lg h-fit">
                  {p.title}
                </h3>
                <p className="text-sm px-4">{p.subtitle}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
