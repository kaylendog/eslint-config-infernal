export const fibonacci = (n) => {
	let a = 1;
	let b = 0;

	for (let i = 0; i < n; i++) {
		const temp = a;
		a += b;
		b = temp;
	}

	return b;
};
