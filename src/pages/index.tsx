import Link_Cards from './link_cards'
import Image from "next/legacy/image";
import Music from './music';

export default function Home() {
  return (
    <main>
      <div className="mx-auto h-fit p-4">
        <div className="w-36 h-36 mx-auto">
          <Image
            src="/Young.jpg"
            alt="avator"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <p className="text-center text-xl font-bold mx-4">
          Hi, I am Young. Here are some of my links.
        </p>
      </div>
      <div className="h-32 mx-6 flex justify-center">
        <Music />
      </div>
      <div className="mt-6 w-3/4 container mx-auto">
        <Link_Cards />
      </div>
    </main>
  )
}
