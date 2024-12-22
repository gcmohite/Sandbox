'use strict';

const video = document.querySelector('video');
const controls = document.querySelector('.controls');

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const rwd = document.querySelector('.rwd');
const fwd = document.querySelector('.fwd');

const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer__display');
const timeBar = document.querySelector('.timebar');

// global
let currentVolume;

// keyboard controls
const keys = [' ', 's', 'm'];

// removing default controls and displaying custom buttons
video.removeAttribute('controls');
controls.style.visibility = 'visible';

// CALLBACK FUNCTIONS
function playPause() {
  video.paused ? video.play() : video.pause();
  updatePlayButton();
}
function updatePlayButton() {
  video.paused ? (play.dataset.icon = 'P') : (play.dataset.icon = 'u');
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
  play.dataset.icon = 'P';
}

function toggleMute() {
  video.muted ? (video.muted = false) : (video.muted = true);
}

// EVENT LISTENERS

// Play/Pause video
play.addEventListener('click', playPause);
video.addEventListener('click', playPause);

// Stop video
stop.addEventListener('click', stopVideo);

// keyboard controls
window.addEventListener('keydown', (e) => {
  e.preventDefault();
  // console.log(e.key);
  if (!keys.includes(e.key)) return;
  if (e.key === ' ') playPause();
  if (e.key === 's') stopVideo();
  if (e.key === 'm') toggleMute();
});
