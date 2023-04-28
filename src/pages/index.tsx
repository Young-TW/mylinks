import Link_Cards from './link_cards'
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="mx-auto h-48">
        <Image
          src="/Young.jpg"
          alt="avator"
          width={36}
          height={36}
          className="w-36 h-36 rounded-full mx-auto p-4"
        />
        <p className="text-center text-2xl font-bold mx-4">
          Hi, I am Young. Here are some of my links.
        </p>
      </div>
      <div className="w-3/4 container mx-auto">
        <Link_Cards />
      </div>
    </main>
  )
}
