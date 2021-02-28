import MediaPlayer from './MediaPlayer.js';
const video = document.querySelector('video');
const button = document.querySelector('button');
import AutoPlay from './plugins/AutoPlay.js';

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay()] });

button.onclick = () => (player.media.paused ? player.play() : player.pause());
