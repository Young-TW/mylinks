<script>
  import OsuCard from './osu_card.svelte';
  import QuaverCard from './quaver_card.svelte';
  import GithubCard from './github_card.svelte';
  import { link_cards } from '../data/links.js';
</script>

<style>
  @import '../styles/link_cards.css';
</style>

<div class="linkcards-flex">
  <OsuCard />
  <QuaverCard />
  <GithubCard />

  {#each link_cards as p (p.title)}
    <div class="linkcard">
      <a href={p.link}>
        <div class="linkcard-img-wrapper">
          <img
            src={p.bg}
            alt={p.title}
            class="linkcard-img"
          />
        </div>
        <div class="linkcard-info">
          <h3 class="linkcard-title">{p.title}</h3>
          <p class="linkcard-subtitle">{p.subtitle}</p>
        </div>
      </a>
    </div>
  {/each}
</div>
