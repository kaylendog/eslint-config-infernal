export const reverse = <T>(arr: readonly T[]): T[] => {
	const reversed: T[] = [];

	for (let i = arr.length - 1; i >= 0; i--) {
		reversed.push(arr[i]);
	}

	return reversed;
};
