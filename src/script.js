const startTime = 40;
const endTime = 68;

function loopSegment() {
  const video = document.querySelector("video");

  if (!video) return;

  if (video.currentTime < startTime || video.currentTime > endTime) {
    video.currentTime = startTime;
    video.play();
  }
}

setInterval(loopSegment, 300);
