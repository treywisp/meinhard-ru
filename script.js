function playVideo() {
  const main = document.getElementById('main-content');
  const footer = document.querySelector('footer');
  const container = document.getElementById('video-player');
  const video = document.getElementById('smartguy');
  const final = document.getElementById('final-message');

  main.style.display = 'none';
  footer.style.display = 'none';
  final.style.display = 'none';
  container.style.display = 'block';
  container.classList.remove('fade-out');
  container.style.opacity = '1';

  video.pause();
  video.currentTime = 0;
  video.muted = false;
  video.play().catch(err => console.error("Ошибка воспроизведения:", err));

  video.onpause = () => {
    if (!video.ended) video.play();
  };

  let faded = false;

  video.ontimeupdate = () => {
    if (!faded && video.duration - video.currentTime <= 1) {
      container.classList.add('fade-out');
      faded = true;
    }
  };

  video.onended = () => {
    container.classList.remove('fade-out');
    faded = false;
    video.pause();
    video.currentTime = 0;
    video.load();
    container.style.display = 'none';

    setTimeout(() => {
      final.style.display = 'block';
      requestAnimationFrame(() => {
        final.classList.add('fade-in');
      });
    }, 200);
  };
}

function playSecondVideo() {
  const player2 = document.getElementById("video-player-2");
  const video2 = document.getElementById("smartguy2");

  player2.style.display = "block";
  video2.play();

  video2.onended = () => {
    player2.style.display = "none";
  };
}
