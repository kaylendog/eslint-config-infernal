export class Bean {
	static readonly beanName: string = "Bean";

	constructor() {
		console.log("Bean.constructor()");
	}

	toString(): string {
		return Bean.beanName;
	}
}
