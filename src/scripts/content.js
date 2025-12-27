let startTime = 0;
let endTime = 0;

function attachLoop(video) {
  video.addEventListener("timeupdate", () => {
    if (
      startTime &&
      endTime &&
      (video.currentTime >= endTime || video.currentTime <= startTime)
    ) {
      video.currentTime = startTime;
    }
  });
}

function waitForVideo() {
  const video = document.querySelector("video");
  if (!video) {
    requestAnimationFrame(waitForVideo);
    return;
  }
  attachLoop(video);
}

waitForVideo();

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "SET_LOOP") {
    startTime = msg.start;
    endTime = msg.end;
  }
});
