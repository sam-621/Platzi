const VERSION = 'v1';

self.addEventListener('install', (event) => {
	event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
	const request = event.request;

	//get
	if (request !== 'GET') {
		return;
	}

	//buscar en cache
	event.responseWith(cachedResponse(request));
});

async function precache() {
	const cache = await caches.open(VERSION);
	return cache.addAll([
		'/',
		'/index.html',
		'/assets/index.js',
		'/assets/MediaPlayer.js',
		'/assets/plugins/AutoPlay.js',
		'/assets/plugins/AutoPause.js',
		'/assets/index.css',
		'/assets/BigBuckBunny.mp4',
	]);
}

async function cachedResponse(request) {
	const cache = await caches.open(VERSION);
	const res = await cache.match(request);

	return res || fetch(request);
}
