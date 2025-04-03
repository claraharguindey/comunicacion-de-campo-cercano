let audio = document.getElementById("audio");
let playBtn = document.querySelector(".play-btn");
let progressBar = document.getElementById("progress");
let volumeSlider = document.getElementById("volume");

const togglePlay = () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = "&#10074;&#10074;";
  } else {
    audio.pause();
    playBtn.innerHTML = "&#9658;";
  }
}

audio.ontimeupdate = () => {
  let progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + "%";
};

const setVolume = () => {
  audio.volume = volumeSlider.value;
}
