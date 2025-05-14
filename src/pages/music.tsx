import "../styles/music.css";

export default function Music() {
  return (
    <div class="music-container">
      <iframe
        class="music-iframe"
        width="100%"
        height="166"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1082189491&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
    </div>
  );
}