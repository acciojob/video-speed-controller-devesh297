const video = document.querySelector("video");
const speedBar = document.querySelector(".speed-bar");
const speedContainer = document.querySelector(".speed");

function handleSpeedChange(e) {
  const y = e.pageY - speedContainer.offsetTop; 
  const percent = y / speedContainer.offsetHeight; 
  const min = 0.5;
  const max = 2;
  const playbackRate = percent * (max - min) + min; 
  video.playbackRate = playbackRate;
  speedBar.textContent = playbackRate.toFixed(1) + "×"; // Update speed text
  speedBar.style.height = `${percent * 100}%`; // Adjust speed bar height
}


speedContainer.addEventListener("mousemove", handleSpeedChange);
