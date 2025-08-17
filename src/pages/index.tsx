import LinkCards from "./link_cards";
import Music from "./music";
import "../styles/index.css"; // 匯入自訂 CSS

export default function Home() {
  return (
    <main class="main-bg">
      <div class="main-container">
        <div class="avatar-wrapper">
          <img
            src="/Young.jpg"
            alt="avatar"
            width={144}
            height={144}
            class="avatar-img"
          />
        </div>
        <p class="intro-text">
          Hi, I am Young. Here are some of my links.
        </p>
      </div>
      <div class="linkcards-wrapper">
        <LinkCards />
      </div>
    </main>
  );
}
