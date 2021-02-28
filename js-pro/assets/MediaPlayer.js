function MediaPlayer(config) {
	this.media = config.element;
	this.plugins = config.plugins || [];

	this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
	console.log(this);
	this.plugins.forEach((plugin) => {
		plugin.run(this);
	});
};

MediaPlayer.prototype.play = function () {
	this.media.play();
};

MediaPlayer.prototype.pause = function () {
	this.media.pause();
};

MediaPlayer.prototype.mute = function () {
	this.media.muted = true;
};

MediaPlayer.prototype.unMute = function () {
	this.media.unmute = false;
};

export default MediaPlayer;
