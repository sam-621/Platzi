function AutoPause() {
	this.threshold = 0.25;
	this.handlerIntersection = this.handlerIntersection.bind(this);
	this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
}

AutoPause.prototype.run = function (player) {
	this.player = player;

	const observer = new IntersectionObserver(this.handlerIntersection, {
		threshold: this.threshold,
	});
	observer.observe(player.media);

	document.addEventListener('visibilitychange', this.handlerVisibilityChange);
};

AutoPause.prototype.handlerIntersection = function (entries) {
	const entry = entries[0];
	console.log(entry);

	const isVisible = entry.intersectionRatio >= this.threshold;

	if (isVisible) {
		this.player.play();
	} else {
		this.player.pause();
	}
};

AutoPause.prototype.handlerVisibilityChange = function () {
	const isVisible = document.visibilityState === 'visible';

	if (isVisible) {
		this.player.play();
	} else {
		this.player.pause();
	}
};

export default AutoPause;
