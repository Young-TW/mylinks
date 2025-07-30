<script>
  import { github_stats } from '../data/github_card.js';
</script>

<style>
  @import '../styles/github_card.css';
</style>

<div class="github-cards">
  {#each github_stats as p (p.alt)}
    <div class="github-card">
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
  {/each}
</div>
