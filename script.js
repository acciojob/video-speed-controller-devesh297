const video = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const volumeControl = document.querySelector('.volume');
const playbackSpeedControl = document.querySelector('.playbackSpeed');
const skipButtons = document.querySelectorAll('.skip');

// Play/Pause Toggle
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚';
    } else {
        video.pause();
        playButton.textContent = '►';
    }
}

playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

// Update Progress Bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.value = percent;
}

video.addEventListener('timeupdate', updateProgress);

// Seek Video
progress.addEventListener('input', function () {
    const newTime = (progress.value * video.duration) / 100;
    video.currentTime = newTime;
});

// Volume Control
volumeControl.addEventListener('input', function () {
    video.volume = volumeControl.value;
});

// Playback Speed Control
playbackSpeedControl.addEventListener('input', function () {
    video.playbackRate = playbackSpeedControl.value;
});

// Skip Forward/Backward
skipButtons.forEach(button => {
    button.addEventListener('click', function () {
        video.currentTime += parseFloat(button.dataset.skip);
    });
});
