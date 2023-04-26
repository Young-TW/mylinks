// import github from '/github.png'
// import blog from '/blog.jpg'

import Image from 'next/image'



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
    title: 'GitHub',
    subtitle: '@Young-TW | 🏡 to all my open-source projects',
    link: 'https://github.com/Young-TW',
    bg: "/github.png",
  },
  {
    title: 'GitHub',
    subtitle: '@Young-TW | 🏡 to all my open-source projects',
    link: 'https://github.com/Young-TW',
    bg: "/github.png",
  },
  {
    title: 'GitHub',
    subtitle: '@Young-TW | 🏡 to all my open-source projects',
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
    <div className="flex flex-wrap space-x-12 space-y-12 font-mono">
      {links.map((p) => {
        return (
          <a href={p.link} className="flex-none h-64 md:w-96 bg-slate-800 rounded-lg hover:bg-slate-700" key={p.title}>
            <img src="/blog.jpg" className="w-full h-1/2 rounded-lg" />
            <div className="w-full h-1/2">
              <h3 className="notosans text-center text-2xl h-fit">
                {p.title}
              </h3>
              <p>{p.subtitle}</p>
            </div>
          </a>
        );
      })}
    </div>
  )
}
