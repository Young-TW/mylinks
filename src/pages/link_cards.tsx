import OsuCard from "./osu_card";
import GithubCard from "./github_card";
import { link_cards } from "../data/links";
import QuaverCard from "./quaver_card";
import "../styles/link_cards.css";

export default function LinkCards() {
  return (
    <div class="linkcards-flex">
      <OsuCard />
      <QuaverCard />
      <GithubCard />
      {link_cards.map((p) => (
        <div
          class="linkcard"
          key={p.title}
        >
          <a href={p.link}>
            <div class="linkcard-img-wrapper">
              <img
                src={p.bg}
                alt={p.title}
                class="linkcard-img"
              />
            </div>
            <div class="linkcard-info">
              <h3 class="linkcard-title">
                {p.title}
              </h3>
              <p class="linkcard-subtitle">{p.subtitle}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
