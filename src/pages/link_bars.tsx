import Image from "next/legacy/image";

import { link_bars } from "../data/links";

export default function LinkBars() {
  return (
    <div>
      {link_bars.map((p) => {
        return (
          <div
            className="h-12 w-96 mt-4 rounded-full mx-auto bg-slate-800 "
            key={p.title}
          >
            <a href={p.link} className="flex">
              <Image
                src={p.logo}
                alt={p.title}
                objectFit="cover"
                width={48}
                height={48}
                className="rounded-full w-9"
              />
              <p className="w-60 notosans text-center text-lg">{p.title}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}
