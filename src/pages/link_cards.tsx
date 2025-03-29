import Image from "next/legacy/image";
import OsuCard from "./osu_card";
import { github_stats } from "./github_card";

const links = [
  {
    title: "Blog",
    subtitle: "🔗 My blog!",
    link: "https://blog.young-tw.com",
    bg: "/browser.png",
  },
  {
    title: "Matrix",
    subtitle: "@-young-:matrix.org | 🏡 Come to chat with me!",
    link: "https://matrix.youngtw.net",
    bg: "/matrix.jpg",
  },
  {
    title: "Uptime Kuma",
    subtitle: "📈 All of my websites uptime status",
    link: "http://status.young-tw.com:12345/status/public",
    bg: "/uptimekuma.png",
  },
  /* {
    title: "GitHub",
    subtitle: "@Young-TW | 📽️ All my open-sourced projects here",
    link: "https://github.youngtw.net",
    bg: "/github.png",
  }, */
  {
    title: "Mastodon.social",
    subtitle: "@young_tw | 🏡 My Mastodon.social account",
    link: "https://mastodon.youngtw.net",
    bg: "/mastodon.jpg",
  },
  {
    title: "g0v.social",
    subtitle: "@young | 🏡 My Taiwanese g0v Mastodon account",
    link: "https://g0v.youngtw.net",
    bg: "/mastodon.jpg",
  },
  {
    title: "YouTube",
    subtitle: "🎬 Find my videos here!",
    link: "https://www.youtube.com/@young-tw",
    bg: "/youtube.png",
  },
  {
    title: "Telegram",
    subtitle: "@young_tw | 🏡 DM with me",
    link: "https://telegram.youngtw.net",
    bg: "/telegram.png",
  },
  {
    title: "Quaver",
    subtitle: "@young0727 | 🎮 My Quaver profile",
    link: "https://quavergame.com/user/236859",
    bg: "/quaver.jpg",
  },
  {
    title: "Bandcamp",
    subtitle: "@youngtw | 🎵 Come to find out my favorite music",
    link: "https://bandcamp.com/youngtw",
    bg: "/bandcamp.png",
  },
  {
    title: "Steam",
    subtitle: "@youngtw | 🎮 Play games with me",
    link: "https://steamcommunity.com/id/youngtw/",
    bg: "/steam.jpeg",
  },
];

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
            <Image
              src={p.src}
              height={p.height}
              width={p.width}
              objectFit="cover"
              alt={p.alt}
              className="rounded-lg"
            />
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
