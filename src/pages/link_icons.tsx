import Image from "next/legacy/image";

import { link_icons } from "../data/links";

export default function LinkIcons() {
  return (
    <div className="flex flex-wrap">
      {link_icons.map((p) => {
        return (
          <div className="m-2 rounded-lg mx-auto px-2" key={p.link}>
            <a href={p.link}>
              <Image src={p.icon} alt="icon" width={48} height={48} />
            </a>
          </div>
        );
      })}
    </div>
  );
}
