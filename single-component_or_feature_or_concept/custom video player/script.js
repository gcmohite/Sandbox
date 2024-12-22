'use strict';

// elements
const playerContainer = document.querySelector('.player');
const video = document.querySelector('.player__video');
const controls = document.querySelector('.player__controls');
const playPauseBtn = document.querySelector('.buttons__play-pause span');
const rewindBtn = document.querySelector('.buttons__rewind-10');
const forwardBtn = document.querySelector('.buttons__forward-10');
const volumeIcon = document.querySelector('.buttons__volume span');
const volumeBtn = document.querySelector('.buttons__volume');
const volumeSlider = document.getElementById('volume');
const fullscreenBtn = document.querySelector('.buttons__fullscreen');
const timer = document.querySelector('.timer');

// remove default controls if Javascript is enabled
video.removeAttribute('controls');
controls.style.visibility = 'visible';

// keyboard controls
const keys = [' ', 'm', 'f', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];

const SKIP_TIME = 10;

function init() {
  // getting and formatting video time
  const time = document.querySelector('.timer p');
  const t = new Date(video.duration * 1000).toISOString();
  const timeString = t.slice(t.lastIndexOf('-') + 1, t.indexOf('.'));
  const days = parseInt(timeString.slice(0, 2)) - 1;
  const hms = timeString.slice(timeString.indexOf('T') + 1);
  let [hr, min, sec] = hms.split(':').map((value) => parseInt(value));
  if (days > 0) hr += days * 24;
  // console.log(hr, min, sec);
  const minString = String(min).padStart(2, 0);
  const secString = String(sec).padStart(2, 0);

  if (hr > 0) {
    const hrString = String(hr).padStart(2, 0);
    time.textContent = [hrString, minString, secString].join(':');
  } else {
    time.textContent = [minString, secString].join(':');
  }

  // setting default volume level
  video.volume = volumeSlider.value = 0.3;
}

video.addEventListener('loadedmetadata', init);

// CALLBACK FUNCTIONS
function playPause(e) {
  video.paused || video.ended ? video.play() : video.pause();
}

function updatePlayPauseBtn() {
  video.paused
    ? (playPauseBtn.textContent = 'play_arrow')
    : (playPauseBtn.textContent = 'pause');
  playPauseBtn.blur();
}

function updateTime() {
  video.currentTime += this;
}

function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    playerContainer.requestFullscreen();
  }
  fullscreenBtn.blur();
}

function toggleMute() {
  // console.log(video.muted);
  if (video.muted) {
    video.muted = false;
    updateVolumeIcon();
  } else {
    video.muted = true;
    updateVolumeIcon();
  }
}

function updateVolume(e) {
  // console.log(this);
  if (this === 'ArrowUp') {
    video.volume > 0.95 ? (video.volume = 1) : (video.volume += 0.05);
  }
  if (this === 'ArrowDown') {
    video.volume < 0.05 ? (video.volume = 0) : (video.volume -= 0.05);
  }
  if (this === volumeSlider) video.volume = Number.parseFloat(e.target.value);
  // console.log(video.volume);
  updateVolumeIcon();
}

function updateVolumeIcon() {
  if (video.volume === 0 || video.muted) volumeIcon.textContent = 'volume_off';
  else if (video.volume <= 0.5 && !video.muted)
    volumeIcon.textContent = 'volume_down';
  else if (video.volume > 0.5 && !video.muted)
    volumeIcon.textContent = 'volume_up';
}

// EVENT LISTENERS
// mouse events
playPauseBtn.addEventListener('click', playPause);
video.addEventListener('click', playPause);
video.addEventListener('play', updatePlayPauseBtn);
video.addEventListener('pause', updatePlayPauseBtn);

rewindBtn.addEventListener('click', updateTime.bind(-SKIP_TIME));
forwardBtn.addEventListener('click', updateTime.bind(SKIP_TIME));

volumeBtn.addEventListener('click', toggleMute);

fullscreenBtn.addEventListener('click', toggleFullScreen);
video.addEventListener('dblclick', toggleFullScreen);

volumeSlider.addEventListener('input', updateVolume);

// keyboard events
window.addEventListener('keydown', (e) => {
  if (!keys.includes(e.key)) return;
  // console.log(e.key);
  if (e.key === ' ') playPause();
  if (e.key === 'm') toggleMute();
  if (e.key === 'f') toggleFullScreen();
  if (e.key === 'ArrowRight') updateTime.call(SKIP_TIME);
  if (e.key === 'ArrowLeft') updateTime.call(-SKIP_TIME);
  if (e.key === 'ArrowUp') updateVolume.call(e.key);
  if (e.key === 'ArrowDown') updateVolume.call(e.key);
});

// document.addEventListener('fullscreenchange', () => {
//   document.fullscreenElement
//     ? console.log(`fullscreen ON`)
//     : console.log(`fullscreen OFF`);
// });

video.addEventListener('timeupdate', (e) => {
  if (video.ended) {
    console.log(`video ended`);
    video.load();
    playPauseBtn.textContent = 'play_arrow';
  }
});
