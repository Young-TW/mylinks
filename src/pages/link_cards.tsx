import Image from "next/legacy/image";

const links = [
  {
    title: 'Blog',
    subtitle: '🔗 My blog!',
    link: 'https://blog.young-tw.com',
    bg: "/browser.png",
  },
  {
    title: 'Matrix',
    subtitle: '@-young-:matrix.org | 🏡 Come to chat with me!',
    link: 'https://matrix.to/#/@-young-:matrix.org',
    bg: "/matrix.jpg",
  },
  {
    title: 'Uptime Kuma',
    subtitle: '📈 All of my websites uptime status',
    link: 'http://status.young-tw.com:12345/status/public',
    bg: "/uptimekuma.png",
  },
  {
    title: 'GitHub',
    subtitle: '@Young-TW | 📽️ All my open-sourced projects here',
    link: 'https://github.com/Young-TW',
    bg: "/github.png",
  },
  {
    title: 'Mastodon.social',
    subtitle: '@young_tw | 🏡 My Mastodon.social account',
    link: 'https://mastodon.social/@young_tw',
    bg: "/mastodon.jpg",
  },
  {
    title: 'g0v.social',
    subtitle: '@young | 🏡 My Taiwanese g0v Mastodon account',
    link: 'https://g0v.social/@young',
    bg: "/mastodon.jpg",
  },
  {
    title: 'YouTube',
    subtitle: '🎬 Find my videos here!',
    link: 'https://www.youtube.com/@young-tw',
    bg: "/youtube.png",
  },
  {
    title: 'Discord',
    subtitle: '@young_tw | 🏡 Join my Discord server!',
    link: 'https://discord.gg/sJ4bX3AquY',
    bg: "/discord.jpeg",
  },
  {
    title: 'Telegram',
    subtitle: '@young_tw | 🏡 DM with me',
    link: 'https://t.me/young_tw',
    bg: "/telegram.png",
  },
  {
    title: 'osu!',
    subtitle: '@-Young- | 🎮 My osu! profile',
    link: 'https://osu.ppy.sh/users/15561507',
    bg: "/osu.jpeg",
  },
  {
    title: 'Bandcamp',
    subtitle: '@youngtw | 🎵 Come to find out my favorite music',
    link: 'https://bandcamp.com/youngtw',
    bg: "/bandcamp.png",
  },
  {
    title: 'Steam',
    subtitle: '@youngtw | 🎮 Play games with me',
    link: 'https://steamcommunity.com/id/youngtw/',
    bg: "/steam.jpeg",
  },
];

export default function LinkCards() {
  return (
    <div className="flex flex-wrap">
      {links.map((p) => {
        return (
          <div className="h-48 w-64 mt-6 rounded-lg mx-auto hover:animate-pulse" key={p.title}>
            <a href={p.link}>
              <div className="w-fit h-1/2 rounded-lg" style={{width: '100%', height: '50%', position: 'relative'}}>
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
                <p className="text-sm px-4">
                  {p.subtitle}
                </p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  )
}
