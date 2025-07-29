<script lang="ts">
  import LinkCards from './link_cards.svelte';
  import Music from './music.svelte';
  import '../styles/index.css';
</script>

<main class="main-bg">
  <div class="main-container">
    <div class="avatar-wrapper">
      <img
        src="/Young.jpg"
        alt="avatar"
        width="144"
        height="144"
        class="avatar-img"
      />
    </div>
    <p class="intro-text">
      Hi, I am Young. Here are some of my links.
    </p>
  </div>

  <!-- <div class="justify-center">
    <LinkIcons />
  </div> -->

  <div class="music-wrapper">
    <Music />
  </div>
  <div class="linkcards-wrapper">
    <LinkCards />
  </div>
</main>
