export const createOutputRange = ({
	isIn,
	isOut,
	from,
	to,
}: {
	isIn: boolean;
	isOut: boolean;
	from: number;
	to: number;
}): number[] => {
	if (isIn && isOut) {
		return [from, to, to, from];
	}
	if (isIn) {
		return [from, to];
	}
	if (isOut) {
		return [to, from];
	}
	return [to, to];
};
