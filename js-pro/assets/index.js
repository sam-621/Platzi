import MediaPlayer from './MediaPlayer.js';
const video = document.querySelector('video');
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
import AutoPlay from './plugins/AutoPlay.js';
// import AutoPause from './plugins/AutoPause.js';

const player = new MediaPlayer({
	element: video,
	plugins: [new AutoPlay()],
});

button1.onclick = () => (player.media.paused ? player.play() : player.pause());
button2.onclick = () => (player.media.muted ? player.unMute() : player.mute());
