import Image from "next/legacy/image";

import LinkCards from "./link_cards";
import Music from "./music";
import OsuCard from "./osu_card";

export default function V1() {
  return (
    <main className="max-lg:bg-gradient-to-r bg-[url('/bg.jpg')] pb-8">
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
      {/* <div className="justify-center">
        <LinkIcons />
      </div> */}
      <div className="h-fit mx-6 flex justify-center">
        <Music />
      </div>
      <div className="w-3/4 container mx-auto">
        <LinkCards />
      </div>
      {/*
      <div className="h-fit flex justify-center">
        <GithubStats />
      </div>
      */}
    </main>
  );
}
