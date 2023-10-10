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
    subtitle: '@Young-TW | 📽️ All my open-source projects here',
    link: 'https://github.com/Young-TW',
    bg: "/github.png",
  },
  {
    title: 'Mastodon',
    subtitle: '@young_tw | 🏡 My Mastodon account',
    link: 'https://mastodon.social/@young_tw',
    bg: "/mastodon.jpg",
  },
  {
    title: 'YouTube',
    subtitle: '🎬 My YouTube channel!',
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
    title: 'Instagram',
    subtitle: '@young__tw | 🏡 My Instagram account',
    link: 'https://www.instagram.com/young__tw/',
    bg: "/instagram.png",
  },
  {
    title: 'Telegram',
    subtitle: '@young_tw | 🏡 My Telegram account',
    link: 'https://telegram.me/young_tw',
    bg: "/telegram.png",
  },
  {
    title: 'Twitter',
    subtitle: '@Young___TW | 🏡 My Twitter account',
    link: 'https://twitter.com/Young___TW',
    bg: "/twitter.png",
  },
  {
    title: 'Osu!',
    subtitle: '@-Young- | 🎮 My Osu! profile',
    link: 'https://osu.ppy.sh/users/15561507',
    bg: "/osu.jpeg",
  },
  {
    title: 'Facebook',
    subtitle: '🏡 My Facebook account',
    link: 'https://www.facebook.com/young20050727',
    bg: "/facebook.png",
  },
  {
    title: 'Steam',
    subtitle: '@youngtw | 🎮 My Steam account',
    link: 'https://steamcommunity.com/id/youngtw/',
    bg: "/steam.jpeg",
  },
  {
    title: 'Medium',
    subtitle: '@Young-TW | 🏡 My Medium account',
    link: 'https://medium.com/@Young-TW',
    bg: "/medium.jpeg",
  },
  {
    title: 'Paypal',
    subtitle: '@YoungUwU | ☕ Buy me a cup of coffee',
    link: 'https://www.paypal.me/YoungUwU',
    bg: "/paypal.jpeg",
  },
  {
    title: 'Soundcould',
    subtitle: '🎵 Listen to my favorite music!',
    link: 'https://soundcloud.com/aeeq7mzofy9t',
    bg: "/soundcloud.jpeg",
  },
  {
    title: 'Twitch',
    subtitle: '@y0ungTW | 📺 My Twitch channel!',
    link: 'https://www.twitch.tv/y0ungtw',
    bg: "/twitch.jpeg",
  },
  {
    title: 'Minecraft',
    subtitle: '🔗 Join my Minecraft server!',
    link: 'https://mc.young-tw.com',
    bg: "/minecraft.jpg",
  },
];

export default function Link_Cards() {
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
