export abstract class Bean {
	public static publicStaticField: string = "publicStaticField";
	public static readonly publicStaticReadonlyField: string = "publicStaticReadonlyField";

	protected static protectedStaticField: string = "protectedStaticField";
	protected static readonly protectedStaticReadonlyField: string = "protectedStaticReadonlyField";

	private static privateStaticField: string = "privateStaticField";
	private static readonly privateStaticReadonlyField: string = "privateStaticReadonlyField";

	static getBean(): string {
		return "Never gonna give you up";
	}

	public publicField: string = "publicField";
	public readonly publicReadonlyField: string = "publicReadonlyField";

	private privateField: string = "privateField";
	private readonly privateReadonlyField: string = "privateReadonlyField";

	constructor() {
		console.log("Bean.constructor()");
	}

	abstract abstractMethod(): void;

	publicInstanceMethod(): string {
		return "Never gonna let you down";
	}

	protected protectedInstanceMethod(): string {
		return "Never gonna run around and desert you";
	}

	private privateInstanceMethod(): string {
		return "Never gonna make you cry";
	}
}
