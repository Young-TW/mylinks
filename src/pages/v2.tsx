import Image from "next/legacy/image";

import LinkBars from './link_bars'
import Music from './music';

export default function V2() {
  return (
    <main className="max-lg:bg-gradient-to-r bg-[url('/bg.jpg')]">
      <div className="mx-auto h-fit p-4 font-mono">
        <div className="w-36 h-36 mx-auto">
          <Image
            src="/Young.jpg"
            alt="avatar"
            width={144}
            height={144}
            className="rounded-full"
          />
        </div>
        <p className="text-center text-xl font-bold mx-4 mt-4">
          Hi, I am Young. Here are some of my links.
        </p>
      </div>
      <div className="h-fit mx-6 flex justify-center">
        <Music />
      </div>
      <div className="w-3/4 container mx-auto">
        <LinkBars />
      </div>
    </main>
  )
}