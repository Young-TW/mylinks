import OsuCard from "./osu_card";
import { github_stats } from "../data/github_card";
import { link_cards } from "../data/links";
import QuaverCard from "./quaver_card";
import "../styles/link_cards.css";

export default function LinkCards() {
  return (
    <div class="linkcards-flex">
      <OsuCard />
      <QuaverCard />
      {github_stats.map((p) => (
        <div
          class="linkcard github-card"
          key={p.alt}
        >
          <a href="https://github.youn.gg" title="GitHub">
            <img
              src={p.src}
              height={p.height}
              width={p.width}
              alt={p.alt}
              class="linkcard-img"
            />
          </a>
        </div>
      ))}
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
