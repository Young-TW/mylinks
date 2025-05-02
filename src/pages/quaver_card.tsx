import Image from "next/image";

export default function QuaverCard() {
  return (
    <div className="h-48 w-64 mt-6 rounded-lg mx-auto hover:animate-pulse ">
      <a
        href="https://quavergame.com/user/236859"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://quaver.young-tw.com/card/young0727"
          alt="Quaver profile card"
          width="256"
          height="192"
          className="rounded-lg"
        />
      </a>
    </div>
  );
}
