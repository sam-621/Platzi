class Singleton {
	private static instance: Singleton;

	private constructor() {
		//init
	}

	public static getInstance() {
		if (!Singleton.instance) Singleton.instance = new Singleton();

		return Singleton.instance;
	}
}
