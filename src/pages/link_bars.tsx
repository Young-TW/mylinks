import Image from "next/legacy/image";

const links = [
  {
    title: 'Blog',
    link: 'https://blog.young-tw.com',
    logo: "/logo/round/Web.png",
  },
  {
    title: 'Matrix',
    link: 'https://matrix.to/#/@-young-:matrix.org',
    logo: "/logo/element.png",
  },
  {
    title: 'Uptime Kuma',
    link: 'http://status.young-tw.com:12345/status/public',
    logo: "/uptimekuma.png",
  },
  {
    title: 'GitHub',
    link: 'https://github.com/Young-TW',
    logo: "/logo/round/github.png",
  },
  {
    title: 'Mastodon',
    link: 'https://mastodon.social/@young_tw',
    logo: "/logo/round/mastodon.png",
  },
  {
    title: 'YouTube',
    link: 'https://www.youtube.com/@young-tw',
    logo: "/logo/round/youtube.png",
  },
  {
    title: 'Discord',
    link: 'https://discord.gg/sJ4bX3AquY',
    logo: "/logo/round/discord.png",
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/young__tw/',
    logo: "/logo/round/instagram.png",
  },
  {
    title: 'Telegram',
    link: 'https://telegram.me/young_tw',
    logo: "/logo/round/telegram.png",
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/Young___TW',
    logo: "/logo/round/x.png",
  },
  {
    title: 'Osu!',
    link: 'https://osu.ppy.sh/users/15561507',
    logo: "/logo/round/osu.png",
  },
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/young20050727',
    logo: "/logo/round/facebook.png",
  },
  {
    title: 'Steam',
    link: 'https://steamcommunity.com/id/youngtw/',
    logo: "/logo/round/steam.png",
  },
  {
    title: 'Medium',
    link: 'https://medium.com/@Young-TW',
    logo: "/logo/round/medium.png",
  },
  {
    title: 'Paypal',
    link: 'https://www.paypal.me/YoungUwU',
    logo: "/logo/round/paypal.png",
  },
  {
    title: 'Soundcould',
    link: 'https://soundcloud.com/aeeq7mzofy9t',
    logo: "/logo/round/soundcloud.png",
  },
  {
    title: 'Twitch',
    link: 'https://www.twitch.tv/y0ungtw',
    logo: "/logo/round/twitch.png",
  },
  {
    title: 'Minecraft',
    link: 'https://mc.young-tw.com',
    logo: "/logo/minecraft.jpg",
  },
];

export default function Link_Bars() {
  return (
    <div>
      {links.map((p) => {
        return (
          <div className="h-12 w-96 mt-4 rounded-full mx-auto bg-slate-800 " key={p.title}>
            <a href={p.link} className="flex">
              <Image
                src={p.logo}
                alt={p.title}
                objectFit="cover"
                width={48}
                height={48}
                className="rounded-full w-9"
              />
              <p className="w-60 notosans text-center text-lg">
                {p.title}
              </p>
            </a>
          </div>
        );
      })}
    </div>
  )
}
