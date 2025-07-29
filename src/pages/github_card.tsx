import { github_stats } from '../data/github_card';
import "../styles/github_card.css";

export default function GithubCard() {
  return (
    <div class="github-cards">
      {github_stats.map((p) => (
        <div
          class="github-card"
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
    </div>
  );
}