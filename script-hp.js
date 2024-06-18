// Music

const audio = document.getElementById("myAudio");
const playButton = document.querySelector(".play-button");
const progressBar = document.querySelector(".progress-bar");

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause";
    } else {
        audio.pause();
        playButton.textContent = "Play";
    }
});

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = `${progress}%`;
});