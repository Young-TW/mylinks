import Image from "next/legacy/image";

const links = [
  {
    link: 'https://blog.young-tw.com',
    icon: "/icon/blog.png",
  },
  {
    link: 'https://mc.young-tw.com',
    icon: "/icon/minecraft-creeper.png",
  },
];

export default function LinkIcons() {
  return (
    <div className="flex flex-wrap">
      {links.map((p) => {
        return (
          <div className="m-2 rounded-lg mx-auto px-2" key={p.link}>
            <a href={p.link}>
              <Image
                src={p.icon}
                alt="icon"
                width={48}
                height={48}
              />
            </a>
          </div>
        );
      })}
    </div>
  )
}
