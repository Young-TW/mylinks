import Image from "next/legacy/image";

const links = [
  {
    title: 'Blog',
    subtitle: 'My blog!',
    link: 'https://blog.young-tw.com',
    bg: "/mylinks/browser.png",
  },
  {
    title: 'GitHub',
    subtitle: '@Young-TW | 🏡 to all my open-source projects',
    link: 'https://github.com/Young-TW',
    bg: "/mylinks/github.png",
  },
  {
    title: 'Mastodon',
    subtitle: '@young_tw | 🏡 My Mastodon account',
    link: 'https://mastodon.social/@young_tw',
    bg: "/mylinks/mastodon.jpg",
  },
  {
    title: 'YouTube',
    subtitle: '🏡 My YouTube channel!',
    link: 'https://www.youtube.com/channel/UCJC4x0CgeqsmdgX3W_cJB3A',
    bg: "/mylinks/youtube.png",
  },
  {
    title: 'Discord',
    subtitle: '@Young#6710 | 🏡 Join my Discord server!',
    link: 'https://discord.gg/sJ4bX3AquY',
    bg: "/mylinks/discord.jpeg",
  },
  {
    title: 'Instagram',
    subtitle: '@young__tw | 🏡 My Instagram account',
    link: 'https://www.instagram.com/young__tw/',
    bg: "/mylinks/instagram.png",
  },
  {
    title: 'Telegram',
    subtitle: '@young_tw | 🏡 My Telegram account',
    link: 'https://telegram.me/young_tw',
    bg: "/mylinks/telegram.png",
  },
  {
    title: 'Twitter',
    subtitle: '@Young___TW | 🏡 My Twitter account',
    link: 'https://twitter.com/Young___TW',
    bg: "/mylinks/twitter.png",
  },
  {
    title: 'Osu!',
    subtitle: '@-Young- | 🏡 My Osu! profile',
    link: 'https://osu.ppy.sh/users/15561507',
    bg: "/mylinks/osu.jpeg",
  },
  {
    title: 'Facebook',
    subtitle: '🏡 My Facebook account',
    link: 'https://www.facebook.com/young20050727',
    bg: "/mylinks/facebook.png",
  },
  {
    title: 'Links',
    subtitle: '🏡 to all my social links',
    link: 'https://blog.young-tw.com/mylinks/',
    bg: "/mylinks/link.jpg",
  },
  {
    title: 'Matrix Chat',
    subtitle: '@-young-:matrix.org | 🏡 My Matrix.org account',
    link: '@-young-:matrix.org',
    bg: "/mylinks/element.png",
  },
  {
    title: 'Steam',
    subtitle: '@youngtw | 🏡 My Steam account',
    link: 'https://steamcommunity.com/id/youngtw/',
    bg: "/mylinks/steam.jpeg",
  },
  {
    title: 'Medium',
    subtitle: '@Young-TW | 🏡 My Medium account',
    link: 'https://medium.com/@Young-TW',
    bg: "/medium.jpeg",
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