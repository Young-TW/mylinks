export default function OsuCard() {
  return (
    <div className="h-48 w-64 mt-6 rounded-lg mx-auto hover:animate-pulse">
      <a
        href="https://osu.ppy.sh/u/-Young-"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://osu-sig.vercel.app/card?user=-Young-&mode=std&lang=en&animation=false&w=256&h=192"
          alt="Osu! profile card"
          width="256"
          height="192"
        />
      </a>
    </div>
  );
}
