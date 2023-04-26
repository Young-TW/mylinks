const links = [
  {
    title: 'Blog',
    subtitle: 'My blog!',
    link: 'https://blog.young-tw.com',
    bg: "/blog.jpg",
  },
  {
    title: 'GitHub',
    subtitle: '@Young-TW | 🏡 to all my open-source projects',
    link: 'https://github.com/Young-TW',
    bg: "/github.png",
  },
  {
    title: 'YouTube',
    subtitle: '@Young-TW | 🏡 to all my open-source projects',
    link: 'https://github.com/Young-TW',
    bg: "/github.png",
  },
  {
    title: 'Links',
    subtitle: '@Young-TW | 🏡 to all my social links',
    link: 'https://github.com/Young-TW',
    bg: "/github.png",
  },
  {
    title: 'Discord',
    subtitle: '@Young#6710 | 🏡 Join my Discord server!',
    link: 'https://github.com/Young-TW',
    bg: "/github.png",
  },
  {
    title: 'GitHub',
    subtitle: '@Young-TW | 🏡 to all my open-source projects',
    link: 'https://github.com/Young-TW',
    bg: "/github.png",
  },
];

// <Image src={p.bg} className="w-full h-1/2 rounded-lg" />

export default function Link_Cards() {
  return (
    <div className="flex flex-wrap space-x-8 space-y-8 font-mono">
      {links.map((p) => {
        return (
          <a href={p.link} className="h-48 md:w-64 bg-slate-800 rounded-lg hover:bg-slate-700" key={p.title}>
            <img src={p.bg} className="w-full h-1/2 rounded-lg" />
            <div className="w-full h-1/2">
              <h3 className="notosans text-center text-lg h-fit">
                {p.title}
              </h3>
              <p className="text-sm px-4">
                {p.subtitle}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  )
}
