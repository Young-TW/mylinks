import Link_Cards from './link_cards'
import Image from "next/legacy/image";

export default function Home() {
  return (
    <main>
      <div className="mx-auto h-48">
        <div className="w-36 h-36 mx-auto p-4">
          <Image
            src="/Young.jpg"
            alt="avator"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
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
