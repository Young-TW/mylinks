import Link_Cards from './link_cards'


export default function Home() {
  return (
    <main>
      <div className="mx-auto h-64">
        <img src="/Young.jpg" className="w-36 h-36 rounded-full mx-auto p-4" />
        <p className="text-center text-2xl font-bold">
          Hi, I am Young. Here are some of my links.
        </p>
      </div>
      <div className="w-3/4 container mx-auto">
        <Link_Cards />
      </div>
    </main>
  )
}
